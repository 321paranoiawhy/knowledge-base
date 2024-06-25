<script lang="ts" setup>
// import md5 from 'blueimp-md5';
import {data as generatedArticleData} from '../../utils/article.data.js';
import qs from 'qs/dist/qs.js';
import {withBase} from 'vitepress';

console.log(generatedArticleData);

// const articleMeta = [{tags: ['node', 'js', 'ts']}, {tags: ['fe', 'be', 'ts']}, {tags: ['我去', '我去', '我去']}];

// const tags = computed(() => initTags(articleMeta));
const tags = computed(() => initTags(generatedArticleData));

/**
 * 初始化标签数据
 * {tagTitle1: [article1, article2, ...}
 */
function initTags(articleMeta: any[]) {
  const tags: any = {};
  for (let i = 0; i < articleMeta.length; i++) {
    const article = articleMeta[i];
    const articleTags = article.tags;
    if (Array.isArray(articleTags)) {
      articleTags.forEach(articleTag => {
        if (articleTag in tags) {
          tags[articleTag].push(article);
        } else {
          tags[articleTag] = [article];
        }
        // TODO 提供切换排序
        // 按文章发布时间降序排列
        // tags[articleTag].sort((a: any, b: any) => b.date.localeCompare(a.date));
      });
    }
  }
  console.log(tags);
  return tags;
}

// 选定的标签
let selectTag = ref('');

/**
 * 切换或取消 tag, 同时更新 url 中的 tag 查询参数 (?tag=), 但不刷新当前页面
 * @param tag 新选中的标签
 * @param cancel 如果新旧标签一致, 是否取消该标签
 */
const toggleTag = (tag: string, cancel = false) => {
  if (selectTag.value && selectTag.value == tag && cancel) {
    selectTag.value = '';

    if (typeof window !== 'undefined') {
      const href = window.location.href;
      const index = href.indexOf('?');
      if (~index) {
        const url = href.slice(0, index);
        history.pushState('', '', url);
      }
    }
  } else {
    selectTag.value = tag;

    if (typeof window !== 'undefined') {
      const href = window.location.href;
      const index = href.indexOf('?');
      if (~index) {
        const url = href.slice(0, index) + `?tag=${tag}`;
        history.pushState('', '', url);
      } else {
        const url = href + `?tag=${tag}`;
        history.pushState('', '', url);
      }
    }
  }
};

// 如果 URL 路径有 tag 参数, 默认选中指定 Tag, 例如: /tags?tag=Git
const queryTag = qs.parse(window.location.href.split('?')[1])?.tag?.trim();
queryTag && toggleTag(queryTag);

const dataList = computed(() => initWordCloud(tags));

/**
 * 初始化词云数据
 * @example [{"name": xx, "value": xx}]
 */
function initWordCloud(tags: any) {
  const dataList = [];
  for (let tag in tags.value) {
    dataList.push({name: tag, value: tags.value[tag].length});
  }
  return dataList;
}
</script>

<template>
  <div class="main-container-tag">
    <!-- 头部 -->
    <div class="tag-header-wrapper" flex items-center mt-4>
      <svg i-mdi:tag-multiple w-1.5em h-1.5em inline-block mr-4></svg>
      <span text-4>文章标签</span>
    </div>

    <!-- 内容 -->
    <div>
      <!-- 标签云 -->
      <word-cloud :dataList="dataList" w-full h-150px @click-tag="clickedTag => toggleTag(clickedTag, false)" />
      <el-row :gutter="24" v-if="Object.keys(tags).length">
        <!-- 标签列表区域 -->
        <el-col :span="24">
          <el-card w-full mb-5>
            <div flex flex-wrap gap-x-2 gap-y-1.5>
              <!-- 遍历对象 -->
              <el-tag
                type="primary"
                :effect="selectTag === tagTitle ? 'dark' : 'plain'"
                round
                @click="toggleTag(tagTitle)"
                v-for="(tag, tagTitle, index) in tags"
                :key="`${tag}-${index}`"
                cursor-pointer
              >
                <span class="tag-title" mr-1>{{ tagTitle }}</span>
                <span>{{ tag.length }}</span>
              </el-tag>
            </div>
          </el-card>
        </el-col>
        <!-- 文章列表区域 -->
        <el-col :span="24">
          <div v-if="selectTag && tags[selectTag]?.length" w-full>
            <div fw-500 py-4 px-5 border-1 border-solid class="border-[--vp-c-gutter] border-b-none">
              共 {{ tags[selectTag].length }} 篇文章
            </div>
            <div border-1 border-solid class="border-[--vp-c-gutter] border-b-none">
              <el-col
                v-for="(article, index) in tags[selectTag]"
                class="px-5! py-3! border-b-[--vp-c-gutter]"
                border-b-1
                border-b-solid
                :key="article.path"
              >
                <a :href="withBase('/' + article.path)">
                  {{ article.title }}
                </a>
                <!-- TODO 文章元数据信息 -->
                <!--  <ArticleMetadata :article="article" :key="md5(article.date)" />-->
              </el-col>
            </div>
          </div>
          <!-- 未选择标签 -->
          <el-card w-full class="no-result" v-if="!selectTag">
            <img src="../assets/images/empty.svg" w-40 h-40 mx-auto />
            <p>Tips: 点击上方标签，查看该标签下的所有文章~</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
