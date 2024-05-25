import {defineConfig, loadEnv} from 'vite';
import UnoCSS from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import {join} from 'path';

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, 'env', 'VITE_');
  console.log(env);
  return {
    optimizeDeps: {
      exclude: ['vitepress']
    },
    envDir: 'env',
    server: {
      hmr: {
        overlay: false
      }
    },
    esbuild: {
      // https://github.com/vitejs/vite/discussions/7920
      // 或者指定移除 console.log: ['console.log']
      pure: command === 'build' ? ['console', 'debugger'] : []
    },
    resolve: {
      alias: {
        // '@': join(__dirname, 'src'),
        '@components': join(__dirname, '.vitepress/theme/components'),
        '@utils': join(__dirname, '.vitepress/theme/utils')
      }
    },
    plugins: [
      UnoCSS(),
      Components({
        dirs: ['.vitepress/theme/components'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      }),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      })
    ]
  };
});
