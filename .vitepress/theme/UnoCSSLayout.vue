<script setup lang="ts">
import {useData, useRouter} from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import {nextTick, onMounted, provide, ref, watch} from 'vue';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import CopyRight from './components/copy-right.vue';
import PageInfo from './components/page-info.vue';
import {generateInlineIcon} from '../../constant';

const {isDark} = useData();

function enableTransitions() {
  return 'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
}

provide('toggle-appearance', async ({clientX: x, clientY: y}: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    {clipPath: isDark.value ? clipPath.reverse() : clipPath},
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  );
});

nprogress.configure({showSpinner: false});

const router = useRouter();
const originalBeforeRouteChange = router.onBeforeRouteChange;
const originalAfterRouteChange = router.onAfterRouteChanged;

router.onBeforeRouteChange = to => {
  nprogress.start();
  originalBeforeRouteChange?.(to);
};

router.onAfterRouteChanged = to => {
  nprogress.done();
  originalAfterRouteChange?.(to);
};

onMounted(async () => {
  await nextTick();
  // hack dropdown menu item
  const menus = document.querySelectorAll('.VPMenu .VPMenuLink .VPLink');
  menus?.forEach(menu => {
    const text = menu.innerHTML;
    const icon = generateInlineIcon(text);
    if (icon) {
      menu.innerHTML = `${icon}${text}`;
    } else {
      // TODO 这里暂以空白占位代替
      menu.innerHTML = `<span w-1em h-1em inline-block v-mid mr-4px></span>${text}`;
    }
  });
});

const getBreadcrumb = () => window.location.href.split('/docs/')[1]?.split('/').filter(Boolean);
const breadcrumb = ref(getBreadcrumb());

watch(
  () => router.route.path,
  () => {
    breadcrumb.value = getBreadcrumb();
    console.log(breadcrumb.value);
  }
);
</script>

<template>
  <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
  <DefaultTheme.Layout>
    <!--    https://vitepress.dev/guide/extending-default-theme#layout-slots -->
    <!--    https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue -->
    <template #doc-before>
      <div v-if="breadcrumb.length > 1">
        <span v-for="(item, index) in breadcrumb" :key="index">
          <!-- Divider: > / | -->
          {{ item }}{{ index === breadcrumb.length - 1 ? '' : ' > ' }}
        </span>
      </div>
      <!-- TODO 字数统计和阅读时长 -->
      <page-info words="" reading-time=""></page-info>
    </template>
    <template #doc-footer-before>
      <copy-right></copy-right>
    </template>
  </DefaultTheme.Layout>
</template>
