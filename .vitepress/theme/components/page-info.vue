<script setup lang="ts">
import {computed} from 'vue';
import {useData} from 'vitepress';

defineProps<{
  /**
   * 阅读时长
   */
  readingTime: string;
  /**
   * 字数统计
   */
  words: string;
}>();

const {frontmatter} = useData();

const author = computed(() => {
  return frontmatter.value?.author || 'WHY';
});
</script>

<template>
  <section
    class="border-b-1 border-[var(--vp-c-divider)] w-full border-b-solid mt-[24px] pb-[12px] flex gap-[12px] mb-[12px] flex-wrap max-w-[85%]"
  >
    <div class="flex gap-[4px] items-center">
      <span i-mdi:account-circle-outline></span>
      作者:&nbsp;
      <span>
        {{ author }}
      </span>
    </div>
    <!--      <div v-if="publishedTime" class="flex gap-[4px] items-center">-->
    <!--        <eos-icons:modified-date />-->
    <!--        发表于:<span>{{ publishedTime }}</span>-->
    <!--      </div>-->
    <!--      <div class="flex gap-[4px] items-center">-->
    <!--        <radix-icons:update />-->
    <!--        更新于:<span>{{ timeFormNow }}</span>-->
    <!--      </div>-->
    <div class="flex gap-[4px] items-center">
      <span i-mdi:file-word-outline></span>
      字数统计:&nbsp;
      <span>{{ words }} 字</span>
    </div>
    <div class="flex gap-[4px] items-center">
      <span i-mdi:clock-outline></span>
      阅读时长:&nbsp;
      <span>{{ readingTime }} 分钟</span>
    </div>
    <div class="flex gap-[4px] items-center">
      <span i-mdi:eye-outline></span>
      阅读量:&nbsp;
      <span id="busuanzi_container_page_pv"><span id="busuanzi_value_page_pv" /></span>
    </div>

    <div class="busuanzi">
      <span id="busuanzi_container_site_pv" style="display: none">
        本站总访问量:&nbsp;
        <span id="busuanzi_value_site_pv"></span>
        次
        <span class="post-meta-divider">|</span>
      </span>
      <span id="busuanzi_container_site_uv" style="display: none">
        本站访客数:&nbsp;
        <span id="busuanzi_value_site_uv"></span>
        人
      </span>
    </div>
  </section>
</template>
