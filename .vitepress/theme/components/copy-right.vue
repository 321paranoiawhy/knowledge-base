<script setup lang="ts">
import {computed, ref} from 'vue';
import {useData, useRoute} from 'vitepress';

const defaultAuthor = 'WHY';
const {frontmatter} = useData();

const author = ref(defaultAuthor);

if (frontmatter.value?.author) author.value = frontmatter.value?.author;

function reName(name: string) {
  return name === 'Choi Yang' ? 'Chocolate1999' : name;
}

const pageHref = location.href;

function getGithubLink(name: string) {
  return `https://github.com/${reName(name)}`;
}
</script>

<template>
  <section
    class="px-[1.2rem] relative py-[1rem] border-1 border-[var(--vp-c-border)]/[.55] w-full min-h-[32px] border-solid my-[32px] leading-[24px] rounded-[4px]"
  >
    <div i-mdi:copyright absolute class="top-[1rem] right-[1.2rem]" />
    <div class="flex flex-col gap-y-[8px] overflow-hidden">
      <div>
        <span class="font-bold">文章作者:&nbsp;</span>
        <span>
          <a :href="getGithubLink(author)" rel="noreferrer" target="_blank" class="c-[var(--vp-c-brand-lighter)]">
            {{ author }}
          </a>
        </span>
      </div>
      <div>
        <span class="font-bold">文章链接:&nbsp;</span>
        <span>
          <a :href="pageHref" rel="noreferrer" target="_blank" class="c-[var(--vp-c-brand-lighter)]">
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
            class="c-[var(--vp-c-brand-lighter)]"
          >
            CC BY-NC-SA 4.0
          </a>
          许可协议。转载请注明来自
          <a href="https://chodocs.cn/" rel="noreferrer" target="_blank" class="c-[var(--vp-c-brand-lighter)]">
            ChoDocs
          </a>
        </span>
        ！
      </div>
    </div>
  </section>
</template>
