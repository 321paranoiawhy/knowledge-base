<script setup lang="ts">
import {WordCloud} from '@antv/g2plot';

type TProps = {
  dataList: Record<string, any>[];
};

const props = withDefaults(defineProps<TProps>(), {
  dataList: () => []
});

const emit = defineEmits<{
  (e: 'clickTag', tag: string): void;
}>();

// 定义属性
// const props = defineProps({
//   dataList: {
//     type: Array as () => Array<Record<string, any>>,
//     default: () => [] as Array<Record<string, any>>
//   }
// });

// 渲染 WordCloud
let wordCloud: WordCloud;

const ID = 'word-cloud-container';

onMounted(() => {
  wordCloud = new WordCloud(ID, {
    data: props.dataList,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [12, 50],
      rotation: 0
    },
    random: () => 0.5
  });

  wordCloud.render();

  // 点击事件
  wordCloud.on('plot:click', e => {
    const tag = e.data?.data?.text;
    tag && emit('clickTag', tag);
  });
});

onBeforeUnmount(() => {
  wordCloud.destroy();
});
</script>

<template>
  <div :id="ID"></div>
</template>
