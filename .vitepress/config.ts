import {defineConfig} from 'vitepress';
import type {DefaultTheme} from 'vitepress/types';
import {transformerTwoslash} from '@shikijs/vitepress-twoslash';
import mathjax3 from 'markdown-it-mathjax3';
import {generatedNavbar, generatedSidebar} from './utils/auto-generate.js';
import {containerPreview, componentPreview} from '@vitepress-demo-preview/plugin';
import {InlineLinkPreviewElementTransform} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it';

const ogUrl = 'https://unocss.dev/';
const ogImage = `${ogUrl}og.png#1`;
const title = 'WHY の 自留地';
// const titleTemplate = '';
const description = 'WHY の 自留地';

// 由 link 和 activeMatch 共同决定是否高亮之
const Nav: DefaultTheme.NavItem[] = [
  ...(generatedNavbar as DefaultTheme.NavItem[]),
  {text: 'ARCHIVE', link: '/docs/archive', activeMatch: '/docs/archive'}
];

// process.env.NODE_ENV 的所有可能值: development / production
// TODO process.env.NODE_ENV 不可靠
// const isDev = process.env.NODE_ENV === 'development';
// const isDev = import.meta.env.DEV;
// 本地开发 base 使用默认值 /
// 部署到 gh-pages 使用仓库名 /knowledge-base/
// const base = isDev ? '/' : '/knowledge-base/';
// console.log(process.env.NODE_ENV, isDev, base);

// TODO
const vercel = ['preview', 'production'].includes(process.env.VITE_VERCEL_ENV || 'production');
const isDefaultBase = vercel || process.env.VITE_BASE_ENV === 'development';
// const base = '/knowledge-base/';
const base = isDefaultBase ? '/' : '/knowledge-base/';

export default defineConfig({
  lang: 'en-US',
  title,
  // titleTemplate,
  description,
  // base 前后必须使用 / 闭合, 默认 /, 可配置为 /<github-repo-name>/
  base,
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
  // 路由重写策略
  // rewrites: {
  //   'docs/:page': '/:page'
  // },
  // 忽略死链, 默认 false
  // 如不忽略死链, 若存在死链, 开发环境不会报错, 打包时则会报错
  ignoreDeadLinks: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    // 所有 code block 均显示行号
    lineNumbers: true,
    // 支持数学公式 (基于 markdown-it-mathjax3)
    math: true,
    image: {
      // 图片懒加载
      lazyLoading: true
    },
    config: md => {
      md.use(mathjax3);
      md.use(containerPreview);
      md.use(componentPreview);
      md.use(InlineLinkPreviewElementTransform);
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
    sidebar: generatedSidebar as DefaultTheme.Sidebar,
    search: {
      provider: 'local'
    },
    outline: {
      level: 'deep',
      // Alternate: TOC / Table of Contents / 目录 / 大纲
      label: 'On this page'
    },
    lastUpdated: {
      // Alternate: Last Edited / Last Modified / [最后/上次][编辑/更新]于
      text: 'Last Updated'
      // TODO 格式化为 2024 年 5 月 1 日 13:01:02
      // formatOptions: {
      // },
    },
    docFooter: {
      // Alternate: Prev / 上一篇
      prev: 'Previous page',
      // Alternate: Next / 下一篇
      next: 'Next page'
    },
    editLink: {
      pattern: 'https://github.com/321paranoiawhy/knowledge-base/edit/main/:path',
      // Alternate: Suggest changes to this page
      text: 'Edit this page on GitHub'
    },
    socialLinks: [{icon: 'github', link: 'https://github.com/321paranoiawhy'}],
    // Sidebar 可见时, footer 不显示 (Vitepress 默认策略)
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-PRESENT WHY'
    }
  },
  transformPageData(pageData) {
    // 须注入 frontmatter 的键值对
    const inject = {
      breadcrumb: true,
      pageInfo: true,
      heatmap: true,
      copyright: true
      // TODO 如何从 md 中获取 # 一级标题
      // title: 'Title'
    };

    Object.keys(inject).forEach(key => {
      // 如 md frontmatter 中未配置该属性, 则使用默认值
      !(key in pageData.frontmatter) && (pageData.frontmatter[key] = inject[key as keyof typeof inject]);
    });
  }
});
