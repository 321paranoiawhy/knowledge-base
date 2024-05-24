import {defineConfig} from 'vitepress';
import type {DefaultTheme} from 'vitepress/types';
import {transformerTwoslash} from '@shikijs/vitepress-twoslash';
import mathjax3 from 'markdown-it-mathjax3';
// import {version} from '../package.json';
import * as fs from 'fs';
import {generatedNav, generatedSidebar} from './utils/auto-index';

const ogUrl = 'https://unocss.dev/';
const ogImage = `${ogUrl}og.png#1`;
const title = 'WHY の 自留地';
const titleTemplate = '';
const description = 'LH Coding Guide';

const transformFileName = (fileName: string) => {
  const index = fileName.indexOf('-');
  if (~index) {
    const arr = fileName.split('-');
    return arr.map(item => (item.length ? item[0].toUpperCase() + item.slice(1) : item)).join(' ');
  } else {
    return fileName.length ? fileName[0].toUpperCase() + fileName.slice(1) : fileName;
  }
};

// 递归读取 docs 目录下所有 markdown 文件, 默认按字典序排列
const docsFiles = fs.readdirSync('./docs', {withFileTypes: false, encoding: 'utf-8', recursive: true});
// 须全大写展示的文件
// const upperCaseFiles = ['html', 'css', 'js', 'ts']
const Docs: DefaultTheme.NavItemWithLink[] = docsFiles
  .map(fileName => {
    if (fileName.endsWith('.md')) {
      return {
        text: transformFileName(fileName.replace(/.md$/g, '')),
        link: `/docs/${fileName}`
      };
    }

    // 去除文件扩展名 .md
    fileName = fileName.replace(/.md$/g, '');
    if (fileName === 'index') return;
    let temp = fileName;
    // upperCaseFiles.includes(temp) && (temp = fileName.toUpperCase())
    return {
      text: transformFileName(temp),
      link: `/docs/${fileName}`
    };
  })
  .filter(Boolean);

// console.log(docsFiles, Docs);

// 自动获取 docs 一级目录
type TFolder = 'backend' | 'docker' | 'frontend' | 'game' | 'k8s' | 'test' | 'tools';
const getDir = (folder: string) => {
  return `./docs/${folder}`;
};

// const FTRONTEND: DefaultTheme.NavItemWithLink[] = fs.readdirSync(getDir('frontend'), {
//   withFileTypes: false,
//   encoding: 'utf-8',
//   recursive: false
// });

const Guides: DefaultTheme.NavItemWithLink[] = [
  {text: 'TODO', link: '/TODO/'}
  // { text: "Getting Started", link: "/guide/" },
  // { text: "Why UnoCSS?", link: "/guide/why" },
  // { text: "Presets", link: "/guide/presets" },
  // { text: "Style reset", link: "/guide/style-reset" },
  // { text: "Config file", link: "/guide/config-file" },
  // { text: "Extracting & Safelist", link: "/guide/extracting" },
];

const Configs: DefaultTheme.NavItemWithLink[] = [
  {text: 'Overview', link: '/config/'},
  {text: 'Rules', link: '/config/rules'},
  {text: 'Shortcuts', link: '/config/shortcuts'},
  {text: 'Theme', link: '/config/theme'},
  {text: 'Variants', link: '/config/variants'},
  {text: 'Extractors', link: '/config/extractors'},
  {text: 'Transformers', link: '/config/transformers'},
  {text: 'Preflights', link: '/config/preflights'},
  {text: 'Layers', link: '/config/layers'},
  {text: 'AutoComplete', link: '/config/autocomplete'},
  {text: 'Presets', link: '/config/presets'}
];

const Integrations: DefaultTheme.NavItemWithLink[] = [
  {text: 'Vite', link: '/integrations/vite'},
  {text: 'Nuxt', link: '/integrations/nuxt'},
  {text: 'Astro', link: '/integrations/astro'},
  {text: 'Svelte Scoped', link: '/integrations/svelte-scoped'},
  {text: 'Webpack', link: '/integrations/webpack'},
  {text: 'Runtime', link: '/integrations/runtime'},
  {text: 'CLI', link: '/integrations/cli'},
  {text: 'PostCSS', link: '/integrations/postcss'},
  {text: 'ESLint', link: '/integrations/eslint'},
  {text: 'VS Code Extension', link: '/integrations/vscode'},
  {text: 'JetBrains IDE Plugin', link: '/integrations/jetbrains'}
];

const Presets: DefaultTheme.NavItemWithLink[] = [
  {text: 'Uno (default)', link: '/presets/uno'},
  {text: 'Icons', link: '/presets/icons'},
  {text: 'Attributify', link: '/presets/attributify'},
  {text: 'Typography', link: '/presets/typography'},
  {text: 'Web fonts', link: '/presets/web-fonts'},
  {text: 'Wind', link: '/presets/wind'},
  {text: 'Mini', link: '/presets/mini'},
  {text: 'Legacy Compat', link: '/presets/legacy-compat'},
  {text: 'Tagify', link: '/presets/tagify'},
  {text: 'Rem to px', link: '/presets/rem-to-px'}
];

const Transformers: DefaultTheme.NavItemWithLink[] = [
  {text: 'Variant Group', link: '/transformers/variant-group'},
  {text: 'Directives', link: '/transformers/directives'},
  {text: 'Compile Class', link: '/transformers/compile-class'},
  {text: 'Attributify JSX', link: '/transformers/attributify-jsx'}
];

const Extractors: DefaultTheme.NavItemWithLink[] = [
  {text: 'Pug Extractor', link: '/extractors/pug'},
  {text: 'MDC Extractor', link: '/extractors/mdc'},
  {text: 'Svelte Extractor', link: '/extractors/svelte'},
  {
    text: 'Arbitrary Variants Extractor',
    link: '/extractors/arbitrary-variants'
  }
];

const Tools: DefaultTheme.NavItemWithLink[] = [
  {text: 'Inspector', link: '/tools/inspector'},
  {text: 'Core', link: '/tools/core'},
  {text: 'Autocomplete', link: '/tools/autocomplete'}
];

// 由 link 和 activeMatch 共同决定是否高亮之
const Nav: DefaultTheme.NavItem[] = [
  // {
  //   text: 'Guide',
  //   items: [
  //     {
  //       text: 'Guide',
  //       items: Guides
  //     }
  //   ],
  //   activeMatch: '^/guide/'
  // },
  ...generatedNav,
  // {
  //   text: 'Docs',
  //   items: [
  //     {
  //       text: 'Docs',
  //       items: Docs
  //     }
  //   ],
  //   activeMatch: '^/docs/'
  // },
  {text: 'ARCHIVE', link: '/docs/archive', activeMatch: '/docs/archive'}
  // {
  //   text: 'Integrations',
  //   items: [
  //     {
  //       text: 'Overview',
  //       link: '/integrations/',
  //     },
  //     {
  //       text: 'Integrations',
  //       items: Integrations,
  //     },
  //     {
  //       text: 'Examples',
  //       link: '/integrations/#examples',
  //     },
  //   ],
  //   activeMatch: '^/integrations/',
  // },
  // {
  //   text: 'Config',
  //   items: [
  //     {
  //       text: 'Config File',
  //       link: '/guide/config-file',
  //     },
  //     {
  //       text: 'Concepts',
  //       items: Configs,
  //     },
  //   ],
  //   activeMatch: '^/config/',
  // },
  // {
  //   text: 'Presets',
  //   items: [
  //     {
  //       text: 'Overview',
  //       link: '/presets/',
  //     },
  //     {
  //       text: 'Community Presets',
  //       link: '/presets/community',
  //     },
  //     {
  //       text: 'Presets',
  //       items: Presets,
  //     },
  //     {
  //       text: 'Transformers',
  //       items: Transformers,
  //     },
  //     {
  //       text: 'Extractors',
  //       items: Extractors,
  //     },
  //   ],
  //   activeMatch: '^/(presets|transformers|extractors)/',
  // },
  // { text: 'Interactive Docs', link: '/interactive/', target: '_blank' },
  // { text: 'Playground', link: '/play/', target: '_blank' },
  // {
  //   text: `v${version}`,
  //   items: [
  //     {
  //       text: 'Release Notes',
  //       link: 'https://github.com/unocss/unocss/releases',
  //     },
  //     {
  //       text: 'Contributing',
  //       link: 'https://github.com/unocss/unocss/blob/main/CONTRIBUTING.md',
  //     },
  //   ],
  // },
];

const SidebarGuide: DefaultTheme.SidebarItem[] = [
  // {
  //   text: 'Guides',
  //   items: Guides
  // },
  {
    text: 'Docs',
    items: Docs
  },
  {
    text: 'Vue',
    items: [
      {
        text: 'astro',
        link: '/docs/frontend/vue/astro'
      }
    ]
  },
  {
    text: 'Archive',
    link: '/docs/archive/'
  }
  // {
  //   text: 'Integrations',
  //   items: [
  //     {
  //       text: 'Overview',
  //       link: '/integrations/',
  //     },
  //     ...Integrations,
  //     {
  //       text: 'Examples',
  //       link: '/integrations/#examples',
  //     },
  //   ],
  // },
  // {
  //   text: 'Config',
  //   link: '/config/',
  // },
  // {
  //   text: 'Presets',
  //   link: '/presets/',
  // },
];

const SidebarPresets: DefaultTheme.SidebarItem[] = [
  {
    text: 'Overview',
    link: '/presets/'
  },
  {
    text: 'Presets',
    collapsed: false,
    items: Presets
  },
  {
    text: 'Community Presets',
    link: '/presets/community'
  },
  {
    text: 'Transformers',
    collapsed: false,
    items: Transformers
  },
  {
    text: 'Extractors',
    collapsed: false,
    items: Extractors
  },
  {
    text: 'Other Packages',
    collapsed: false,
    items: Tools
  }
];

const SidebarConfig: DefaultTheme.SidebarItem[] = [
  {
    text: 'Config',
    collapsed: false,
    items: Configs
  },
  {
    text: 'Config File',
    link: '/guide/config-file'
  }
];

export default defineConfig({
  lang: 'en-US',
  title,
  titleTemplate: titleTemplate,
  description,
  base: '/',
  // srcDir: 'docs',
  outDir: '.vitepress/dist',
  head: [
    ['link', {rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml'}],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    ['meta', {name: 'author', content: 'Anthony Fu'}],
    ['meta', {property: 'og:type', content: 'website'}],
    ['meta', {name: 'og:title', content: title}],
    ['meta', {name: 'og:description', content: description}],
    ['meta', {property: 'og:image', content: ogImage}],
    ['meta', {name: 'twitter:title', content: title}],
    ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
    ['meta', {name: 'twitter:image', content: ogImage}],
    ['meta', {name: 'twitter:site', content: '@antfu7'}],
    ['meta', {name: 'twitter:url', content: ogUrl}],
    [
      'link',
      {
        rel: 'search',
        type: 'application/opensearchdescription+xml',
        href: '/search.xml',
        title: 'UnoCSS'
      }
    ]
  ],
  // 显示最后一次更新时间, 文件须被 git 提交方可显示, 否则不显示
  lastUpdated: true,
  // 路由不带 .html 后缀
  cleanUrls: true,
  ignoreDeadLinks: [
    // /^\/play/,
    // /^\/interactive/,
    // /:\/\/localhost/,
  ],

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
      '/guide/': SidebarGuide,
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

      // '/integrations/': SidebarGuide,

      // '/tools/': SidebarPresets,
      // '/presets/': SidebarPresets,
      // '/transformers/': SidebarPresets,
      // '/extractors/': SidebarPresets,

      // '/config/': SidebarConfig,
    },
    editLink: {
      pattern: 'https://github.com/unocss/unocss/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
      // text: 'Suggest changes to this page',
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/321paranoiawhy'}
      // { icon: 'discord', link: 'https://chat.antfu.me' },
    ],
    // Sidebar 可见时, footer 不显示 (Vitepress 默认策略)
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-PRESENT WHY'
    }
  }
});
