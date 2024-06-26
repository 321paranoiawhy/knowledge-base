<script setup lang="ts">
import {useRouter, withBase} from 'vitepress';
import {transformFileName} from '../../utils/index.js';
import {generateInlineIcon, ALL_CAPITALIZE_STACK} from '../../../constant.js';

const breadcrumb = ref<string[]>([]);

const router = useRouter();

const getBreadcrumb = () => {
  // pathname 不含 search (?) 和 hash (#) 部分
  if (window.location.pathname.includes('/docs/')) {
    return (
      window.location.pathname
        .split('/docs/')[1]
        ?.split('/')
        .filter(Boolean)
        // 中文支持
        .map(e => transformFileName(decodeURI(e), ALL_CAPITALIZE_STACK.includes(decodeURI(e))))
    );
  } else {
    return (
      window.location.pathname
        .split('/')
        // TODO
        .filter(item => item && item !== import.meta.env.BASE_URL?.replaceAll('/', ''))
        // 中文支持
        .map(e => transformFileName(decodeURI(e), ALL_CAPITALIZE_STACK.includes(decodeURI(e))))
    );
  }
};

watch(
  () => router.route.path,
  () => {
    breadcrumb.value = getBreadcrumb();
  },
  {immediate: true}
);
</script>

<template>
  <div v-if="$frontmatter?.breadcrumb" flex flex-wrap items-center>
    <a
      :href="withBase('/')"
      flex
      items-center
      fw-500
      underline
      class="text-[--vp-c-brand-1] hover:text-[--vp-c-brand-2]"
    >
      <svg i-mdi:home w-1em h-1em mr-1></svg>
      <span class="text-[--vp-c-brand-1]">Home</span>
    </a>
    <span mx-2>/</span>
    <span v-for="(item, index) in breadcrumb" :key="index" flex-shrink-0>
      <!-- 上一级 -->
      <a
        v-if="index === 1 && index !== breadcrumb.length - 1"
        :href="withBase(`/docs/${breadcrumb[0]}/${item}`.toLowerCase().replace(/ /g, '-'))"
        inline-block
        underline
        fw-500
        class="text-[--vp-c-brand-1] hover:text-[--vp-c-brand-2]"
      >
        <span v-html="generateInlineIcon(item)"></span>
        {{ item }}
      </a>
      <span v-else>
        <span v-html="generateInlineIcon(item)"></span>
        {{ item }}
      </span>
      <!-- Possible Divider: > / | -->
      <span mx-2 v-if="index !== breadcrumb.length - 1">/</span>
    </span>
  </div>
</template>
