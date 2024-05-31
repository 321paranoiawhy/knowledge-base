<script setup lang="ts" xmlns:i-mdi="http://www.w3.org/1999/xhtml">
import {useData, useRoute} from 'vitepress';

const {frontmatter} = useData();

const author = ref(import.meta.env.VITE_AUTHOR);

// frontmatter author 字段优先级最高
if (frontmatter.value?.author) author.value = frontmatter.value?.author;

const pageHref = ref(location.href);
const router = useRoute();
watch(
  () => router.path,
  () => {
    pageHref.value = location.href;
  }
);
</script>

<template>
  <section px-1.2rem relative py-1rem my-8 rounded-1 lh-6 w-full class="bg-[--vp-c-default-soft]">
    <div i-mdi:copyright absolute top-4 right-1.2rem />
    <div flex flex-col gap-y-2 overflow-hidden>
      <div>
        <span class="fw-500">文章作者:&nbsp;</span>
        <span>
          <a href="https://github.com/321paranoiawhy" rel="noreferrer" target="_blank" class="c-[var(--vp-c-brand-1)]">
            {{ author }}
          </a>
        </span>
      </div>
      <div>
        <span class="font-bold">文章链接:&nbsp;</span>
        <span>
          <a :href="pageHref" rel="noreferrer" target="_blank" class="c-[var(--vp-c-brand-1)]">
            {{ pageHref }}
          </a>
        </span>
      </div>
      <div>
        <span class="font-bold">版权声明:&nbsp;</span>
        <span>
          本博客所有文章除特别声明外, 均采用
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            rel="noreferrer"
            target="_blank"
            class="c-[var(--vp-c-brand-1)]"
          >
            CC BY-NC-SA 4.0
          </a>
          许可协议。转载请注明来自
          <a
            href="https://321paranoiawhy.github.io/knowledge-base"
            rel="noreferrer"
            target="_blank"
            class="c-[var(--vp-c-brand-1)]"
          >
            WHY の 自留地
          </a>
        </span>
        ！
      </div>
    </div>
  </section>
</template>
