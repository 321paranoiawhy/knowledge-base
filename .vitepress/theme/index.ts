// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import UnoCSSLayout from './UnoCSSLayout.vue';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
// PV UV 统计
import busuanzi from 'busuanzi.pure.js';
// medium 图片预览效果
import mediumZoom from 'medium-zoom';
import '@shikijs/vitepress-twoslash/style.css';

import './rainbow.css';
import './vars.css';
import './overrides.css';
import 'uno.css';
// 主题切换必须引入 element-plus dark css
import 'element-plus/theme-chalk/dark/css-vars.css';
import {useData, useRoute} from 'vitepress';
import CustomLayout from './layouts/custom-layout.vue';

// import {AntDesignContainer, ElementPlusContainer, NaiveUIContainer} from '@vitepress-demo-preview/component';
// import '@vitepress-demo-preview/component/dist/style.css';

// nolebase related
import {NolebaseInlineLinkPreviewPlugin} from '@nolebase/vitepress-plugin-inline-link-preview/client';
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css';

import {NolebaseGitChangelogPlugin} from '@nolebase/vitepress-plugin-git-changelog/client';

let homePageStyle: HTMLStyleElement | undefined;

export default {
  ...Theme,
  Layout: () => {
    return h(UnoCSSLayout);
  },
  enhanceApp({app, router}) {
    app.use(TwoslashFloatingVue);

    app.use(NolebaseInlineLinkPreviewPlugin);
    app.use(NolebaseGitChangelogPlugin);

    // layout 全局组件
    app.component('custom', CustomLayout);
    // app.component('demo-preview', AntDesignContainer);

    if (typeof window === 'undefined') return;

    const originalAfterRouteChange = router.onAfterRouteChanged;

    router.onAfterRouteChanged = () => {
      originalAfterRouteChange?.();

      busuanzi.fetch();
    };

    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/'),
      {immediate: true}
    );
  },
  setup() {
    const {frontmatter} = useData();
    const route = useRoute();

    const initZoom = () => {
      // 选择器为 .main img
      mediumZoom('.main img', {background: 'var(--vp-c-bg)'});
    };

    onMounted(() => {
      initZoom();
    });

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // https://giscus.app/zh-CN
    // https://github.com/settings/installations/51129315
    giscusTalk(
      {
        // repo: 'T-miracle/blog',
        repo: '321paranoiawhy/knowledge-base',
        repoId: 'R_kgDOMAAHSA', // 对应 script 标签中的 data-repo-id
        category: 'General', // 对应 script 标签中的 data-category
        categoryId: 'DIC_kwDOMAAHSM4Cfldg', // 对应 script 标签中的 data-category-id
        mapping: 'pathname'
      },
      {
        frontmatter,
        route
      },
      // 全局开启, 可在 md frontmatter 中设置 comment: false 以关闭
      true
    );
  }
};

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes('chrome')) document.documentElement.classList.add('browser-chrome');
  else if (browser.includes('firefox')) document.documentElement.classList.add('browser-firefox');
  else if (browser.includes('safari')) document.documentElement.classList.add('browser-safari');
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement('style');
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
