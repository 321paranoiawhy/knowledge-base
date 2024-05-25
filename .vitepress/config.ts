import {defineConfig} from 'vitepress';
import type {DefaultTheme} from 'vitepress/types';
import {transformerTwoslash} from '@shikijs/vitepress-twoslash';
import mathjax3 from 'markdown-it-mathjax3';
// import {version} from '../package.json';
import {generatedNav, generatedSidebar} from './utils/auto-generate';
import {containerPreview, componentPreview} from '@vitepress-demo-preview/plugin';

const ogUrl = 'https://unocss.dev/';
const ogImage = `${ogUrl}og.png#1`;
const title = 'WHY の 自留地';
const titleTemplate = '';
const description = 'WHY の 自留地';

// console.log($env)

// 由 link 和 activeMatch 共同决定是否高亮之
const Nav: DefaultTheme.NavItem[] = [
  ...generatedNav,
  {text: 'ARCHIVE', link: '/docs/archive', activeMatch: '/docs/archive'}
];

// process.env.NODE_ENV 的所有可能值: development / production
const isDev = process.env.NODE_ENV === 'development';
// const isDev = import.meta.env.DEV;
// 本地开发 base 使用默认值 /, 部署到 gh-pages 使用 仓库名 /knowledge-base/
const base = isDev ? '/' : '/knowledge-base/';
console.log(process.env.NODE_ENV, isDev, base);

export default defineConfig({
  lang: 'en-US',
  title,
  // titleTemplate,
  description,
  // base 前后必须使用 / 闭合
  // base: '/',
  base,
  // srcDir: 'docs',
  outDir: '.vitepress/dist',
  head: [
    ['link', {rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml'}],
    [
      'link',
      {
        rel: 'alternate icon',
        // `${base}fileName`, 默认 base 为 /, 即 `/favicon.ico`
        href: `${base}favicon.ico`,
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    ['meta', {name: 'author', content: 'WHY'}],
    ['meta', {property: 'og:type', content: 'website'}],
    ['meta', {name: 'og:title', content: title}],
    ['meta', {name: 'og:description', content: description}],
    ['meta', {property: 'og:image', content: ogImage}]
  ],
  // 显示最后一次更新时间, 文件须被 git 提交方可显示, 否则不显示
  lastUpdated: true,
  // 路由不带 .html 后缀
  cleanUrls: true,
  ignoreDeadLinks: true,

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    // 所有 code block 均显示行号
    lineNumbers: true,
    // 支持数学公式, 基于 markdown-it-mathjax3
    math: true,
    image: {
      // 图片懒加载
      lazyLoading: true
    },
    config: md => {
      md.use(mathjax3);
      md.use(containerPreview);
      md.use(componentPreview);
    },
    codeTransformers: [
      transformerTwoslash({
        processHoverInfo: info => info.replace(/_unocss_core\./g, '')
      })
    ]
  },

  themeConfig: {
    logo: '/logo.svg',
    nav: Nav,
    search: {
      provider: 'local'
    },
    outline: {
      level: 'deep',
      label: 'On this page'
    },
    lastUpdated: {
      // 最后更新于 / 上次更新于
      text: 'Last Updated'
      // TODO 格式化为 2024 年 5 月 1 日 13:01:02
      // formatOptions: {
      // },
    },
    docFooter: {
      // 上一篇 / 下一篇
      prev: 'Previous page',
      next: 'Next page'
    },
    sidebar: {
      ...generatedSidebar
      // '/docs/frontend/vue/': [
      //   {
      //     text: '<span class="i-logos:vue w-1em h-1em inline-block v-mid mr-4px"></span>Vue',
      //     items: [
      //       {
      //         text: 'astro',
      //         link: '/docs/frontend/vue/astro'
      //       },
      //       {
      //         text: 'eslint',
      //         link: '/docs/frontend/vue/eslint'
      //       },
      //       {
      //         text: 'vitepress',
      //         link: '/docs/frontend/vue/vitepress'
      //       }
      //     ]
      //   }
      // ]
    },
    editLink: {
      pattern: 'https://github.com/321paranoiawhy/knowledge-base/edit/main/:path',
      // Suggest changes to this page
      text: 'Edit this page on GitHub'
    },
    socialLinks: [{icon: 'github', link: 'https://github.com/321paranoiawhy'}],
    // Sidebar 可见时, footer 不显示 (Vitepress 默认策略)
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-PRESENT WHY'
    }
  }
});
