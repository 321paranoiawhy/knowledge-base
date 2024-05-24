<script setup lang="ts">
import {useData, useRoute} from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import {nextTick, provide} from 'vue';
import CopyRight from './components/copy-right.vue';
import PageInfo from './components/page-info.vue';

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
</script>

<template>
  <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
  <DefaultTheme.Layout>
    <!--    https://vitepress.dev/guide/extending-default-theme#layout-slots -->
    <!--    https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue -->
    <template #doc-before>
      <!-- TODO 字数统计和阅读时长 -->
      <page-info words="" read-time=""></page-info>
    </template>
    <template #doc-footer-before>
      <copy-right></copy-right>
    </template>
  </DefaultTheme.Layout>
</template>
