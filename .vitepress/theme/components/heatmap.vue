<script setup lang="ts">
import CalHeatmap from 'cal-heatmap';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import LegendLite from 'cal-heatmap/plugins/LegendLite';
import CalendarLabel from 'cal-heatmap/plugins/CalendarLabel';
import 'cal-heatmap/cal-heatmap.css';

import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';

import heatmapJson from '../../../.generated/heatmap.json';

import {useData} from 'vitepress';

const {isDark} = useData();

const ID = 'github-heatmap';
const LEGEND_ID = `${ID}-legend`;

let cal: CalHeatmap;

const loading = ref(false);

async function paint(cal: CalHeatmap, theme: 'light' | 'dark') {
  // https://cal-heatmap.com/docs/showcase#github-profile-contribution-like
  await cal.paint(
    {
      theme: theme,
      // cal-heatmap data type 缺失 source / type / x / y / groupY
      // 故须 as any 以忽略类型错误
      data: {
        source: heatmapJson,
        type: 'json',
        // datum example: {date: '2024-05-24', file: 2}
        x: 'date',
        y: datum => {
          const maybeNumber = +datum.file;
          if (Number.isNaN(maybeNumber)) {
            return '';
          } else {
            return maybeNumber;
          }
        },
        groupY: 'sum', // sum or max or custom function
        highlight: [new Date()]
      },
      date: {
        start: new Date('2024-01-01'),
        highlight: [new Date()]
      },
      range: 12,
      scale: {
        color: {
          type: 'threshold',
          range: ['#daf6ea', '#c7f0df', '#82edc0', '#0bd07d', '#00663b'],
          domain: [2, 4, 6, 8]
        }
      },
      domain: {
        type: 'month',
        gutter: 5,
        // https://cal-heatmap.com/docs/options/domain/label
        // label: {text: 'YYYY/M', textAlign: 'start', position: 'bottom'}
        // MMM: Jan (一月) -> Dec (十二月)
        label: {text: 'MMM', textAlign: 'start', position: 'top'}
      },
      subDomain: {type: 'ghDay', radius: 2, width: 16, height: 16, gutter: 5},
      itemSelector: `#${ID}`
    } as any,
    [
      [
        Tooltip,
        {
          text: function (timestamp: number, value: number, dayjsDate: dayjs.Dayjs) {
            const isToday = dayjsDate.isToday();
            if (timestamp > Date.now()) {
              return dayjsDate.format('客官别急, 这一天尚未到来~');
            }
            if (!value) {
              if (isToday) {
                return '今日未更新~';
              }
              return dayjsDate.format('YYYY-MM-DD 未更新');
            } else {
              if (isToday) {
                return '今日更新' + value + ' 篇博文';
              }
              return dayjsDate.format('YYYY-MM-DD 更新了 ') + value + ' 篇博文';
            }
          }
        }
      ],
      [
        LegendLite,
        {
          itemSelector: `#${LEGEND_ID}`,
          includeBlank: true,
          radius: 2,
          width: 14,
          height: 14,
          gutter: 5
        }
      ],
      [
        CalendarLabel,
        {
          width: 35,
          position: 'left',
          key: 'left',
          textAlign: 'start',
          // magic number 25 to position properly
          padding: [25, 0, 0, 0],
          // 等价于
          // text: () => ['', 'Mon', '', 'Wed', '', 'Fri', '']
          text: () => dayjs.weekdaysShort().map((d, i) => (i % 2 == 0 ? '' : d))
          // text: () => ['一', '', '三', '', '五', '', '日']
        }
      ]
    ]
  );
  loading.value = false;
}

watch(
  isDark,
  () => {
    loading.value = true;

    if (isDark.value) {
      cal?.destroy();
      cal = new CalHeatmap();
      cal.extendDayjs(isToday);
      paint(cal, 'dark');
    } else {
      cal?.destroy();
      cal = new CalHeatmap();
      cal.extendDayjs(isToday);
      paint(cal, 'light');
    }
  },
  {
    immediate: true
  }
);
</script>

<template>
  <div class="heatmap-container" pt-8 pb-2 flex flex-col items-center w-full overflow-x-auto>
    <div :id="ID" v-loading="loading" w-full=""></div>
    <!-- pl-35px 用于对齐至网格 -->
    <div class="heatmap-header" pl-35px mt-4 flex justify-between items-center w-full>
      <span class="heatmap-header-title" flex-1 text-4 lh-6 fw-500>Commit History</span>
      <div class="heatmap-header-action" flex-1>
        <el-button-group shape="round">
          <el-button
            @click="
              e => {
                e.preventDefault();
                cal?.previous();
              }
            "
          >
            <!-- Prev -->
            ← Previous
          </el-button>
          <el-button
            @click="
              e => {
                e.preventDefault();
                cal?.next();
              }
            "
          >
            Next →
          </el-button>
        </el-button-group>
      </div>
      <div class="heatmap-legend-container color-[var(--vp-home-heatmap-legend-text)]" flex justify-between text-14px>
        <span>Less</span>
        <div :id="LEGEND_ID" flex items-center mx-12px my-0></div>
        <span>More</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.ch-domain-text) {
  font-size: 12px;
  color: var(--vp-home-heatmap-legend-text);
}

:deep(.ch-plugin-calendar-label-text) {
  font-size: 12px !important;
  color: var(--vp-home-heatmap-legend-text);
}
</style>
