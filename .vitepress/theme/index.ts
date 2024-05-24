// https://vitepress.dev/guide/custom-theme
import {h, nextTick, onMounted, watch} from 'vue';
import Theme from 'vitepress/theme';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import UnoCSSLayout from './UnoCSSLayout.vue';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import {toRefs} from 'vue';
// PV UV 统计
import busuanzi from 'busuanzi.pure.js';
// medium 图片预览效果
import mediumZoom from 'medium-zoom';
import '@shikijs/vitepress-twoslash/style.css';

import './rainbow.css';
import './vars.css';
import './overrides.css';
import 'uno.css';
import {useData, useRoute} from 'vitepress';
import CustomLayout from './layouts/custom-layout.vue';

let homePageStyle: HTMLStyleElement | undefined;

export default {
  ...Theme,
  Layout: () => {
    return h(UnoCSSLayout);
  },
  enhanceApp({app, router}) {
    app.use(TwoslashFloatingVue);

    // layout 全局组件
    app.component('custom', CustomLayout);

    if (typeof window === 'undefined') return;

    router.onAfterRouteChanged = () => {
      busuanzi.fetch();
    };

    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/'),
      {immediate: true}
    );
  },
  setup() {
    const {frontmatter} = toRefs(useData());
    const route = useRoute();

    const initZoom = () => {
      // 可更改选择器为 .main img
      mediumZoom('img', {background: 'var(--vp-c-bg)'});
    };

    onMounted(() => {
      initZoom();
    });

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // TODO 更改 giscus 配置
    giscusTalk(
      {
        repo: 'T-miracle/blog',
        repoId: 'R_kgDOJCf-FQ',
        categoryId: 'DIC_kwDOJCf-Fc4CUohc',
        mapping: 'pathname'
      },
      {
        frontmatter,
        route
      }
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
