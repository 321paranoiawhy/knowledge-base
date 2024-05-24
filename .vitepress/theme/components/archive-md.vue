<script setup lang="ts">
import {computed, ref} from 'vue';
import {data} from '../../utils/archive.data';

console.log('archive data: ', data);

const {yearMap, postMap} = data;

// 默认按年份降序排序
const isDescending = ref(true);

const yearList = Object.keys(yearMap).sort((a, b) => (isDescending.value ? b - a : a - b));

const computedYearMap = computed(() => {
  let result = {};
  for (let key in yearMap) {
    result[key] = yearMap[key].map(url => postMap[url]);
  }
  return result;
});
</script>

<template>
  <div class="max-w-screen-lg w-full px-6 py-8 my-0 mx-auto">
    <div v-for="year in yearList" :key="year">
      <div v-text="year" class="pt-3 pb-2 text-xl font-serif"></div>
      <div
        v-for="(article, articleIndex) in computedYearMap[year]"
        :key="articleIndex"
        class="flex justify-between items-center py-1 pl-6"
      >
        <a
          v-text="article.title"
          :href="article.url"
          class="post-dot overflow-hidden whitespace-nowrap text-ellipsis"
        ></a>
        <div v-text="article.date.string" class="pl-4 font-serif whitespace-nowrap"></div>
      </div>
    </div>
  </div>
</template>
