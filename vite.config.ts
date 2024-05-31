import {defineConfig, loadEnv} from 'vite';
import UnoCSS from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Inspect from 'vite-plugin-inspect';
import VueDevTools from 'vite-plugin-vue-devtools';
import {join} from 'path';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

import {GitChangelog, GitChangelogMarkdownSection} from '@nolebase/vitepress-plugin-git-changelog/vite';

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, 'env', 'VITE_');
  console.log(env);

  return {
    optimizeDeps: {
      include: [
        // @rive-app/canvas is a CJS/UMD module, so it needs to be included here
        // for Vite to properly bundle it.
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas'
      ],
      exclude: ['vitepress', '@nolebase/vitepress-plugin-enhanced-readabilities/client']
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
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@use "~/styles/element/index.scss" as *;`
    //     }
    //   }
    // },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading'
      ]
    },
    plugins: [
      UnoCSS(),
      AutoImport({
        imports: ['vue'],
        dts: 'auto-imports.d.ts',
        // dirs: ['.vitepress/theme/utils/**'],
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        dirs: ['.vitepress/theme/components'],
        dts: 'components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [ElementPlusResolver()]
      }),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      }),
      VueDevTools(),
      Inspect({
        build: true,
        outputDir: '.vite-inspect'
      }),
      GitChangelog({
        repoURL: () => env.VITE_GITHUB_URL + '/' + env.VITE_REPO_NAME
      }),
      GitChangelogMarkdownSection()
    ]
  };
});
