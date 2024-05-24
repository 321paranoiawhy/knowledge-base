import {defineConfig} from 'vite';
import UnoCSS from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig(({command}) => {
  return {
    optimizeDeps: {
      exclude: ['vitepress']
    },
    envDir: '.',
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
    plugins: [
      UnoCSS(),
      Components({
        dirs: ['.vitepress/theme/components'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      })
    ]
  };
});
