# TODO / Plan

- ✅ nprogress

  可使用插件 [vitepress-plugin-nprogress](https://github.com/ZhongxuYang/vitepress-plugin-nprogress)

  安装 `nprogress` 依赖:

  ```bash
  pnpm add nprogress @types/nprogress -D
  ```

  [手动实现] 在布局文件中使用:

  ```vue twoslash
  <script setup lang="ts">
  import {useRouter} from 'vitepress';
  import nprogress from 'nprogress';
  import 'nprogress/nprogress.css';

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
  </script>
  ```

  TODO 浏览器返回或前进时 `nprogress` 未显示

- ✅ 评论 giscus

  ```bash
  pnpm add vitepress-plugin-comment-with-giscus -D
  ```

- 🚧 标签及标签页 tags
- 🚧 友情链接
- 🚧 广告+网站流量分析
- 🚧 MDX 支持
- 自动生成 `sitemap`

  - [给你的 Next.js 项目优雅地添加 sitemap](https://chodocs.cn/nextjs/sitemap/)

- 🚧 归档 archive (按年份降序, 提供排序切换)
- 🚧 Heading 前置 H1 ~ H6
- ✅ 集成 `markdown-it-footnote` 以支持脚注
- 🚧 集成 `slidev`
- 🚧 codepen 等媒体网站展示
- [vitepress 插件合集](https://chodocs.cn/program/vitepress-plugin/)
- 🚧 embed, 如 codepen
- 🚧 代码块折叠功能 (带动画) 侧边栏展开折叠动画 (collapse)
- 🚧 `frontmatter` 补全 (读取自 frontmatter.d.ts)
  - 编辑 `frontmatter` 或在 `md` 中使用 `frontmatter` 时补全 (插件)
  - 在 `vue` 中使用时补全
- ✅ 回到顶部

  - [vitepress-plugin-back-to-top](https://github.com/wehuss/vitepress-plugin-back-to-top)

- 🚧 实时阅读进度, 展示于回到顶部按钮
- 🚧 路径别名
- 🚧 mermaid

  - [Mermaid - Docs](https://mermaid.js.org/)
  - [Mermaid - GitHub](https://github.com/mermaid-js/mermaid)
  - [Mermaid 在线编辑器](https://mermaid.live)

- ✅ word cloud (标签) 词云

  - [wordCloud.vue](https://github.com/yqchilde/yqchilde.github.io/blob/825854e3318298f7d67aab5bcc76f6b0f3dab1d8/.vitepress/theme/components/wordCloud.vue)

    基于 `@antv/g2plot`

- ✅ commit heatmap

  - [cal-heatmap](https://github.com/wa0x6e/cal-heatmap)
  - [vue-calendar-heatmap](https://github.com/julienr114/vue-calendar-heatmap)

- 🚧 复刻 medium-zoom 至 uniapp

  ```bash
  pnpm add medium-zoom -D
  ```

- ✅ 面包屑 breadcrumb
- 🚧 useSetting 右侧边呼出
- 🚧 付费阅读
- 🚧 知乎、`CSDN` 展开阅读全文功能, 逐渐模糊最后一行
- 🚧 更多语法高亮支持, 如 `ignore` 文件
- 🚧 demo 组件
- - [vitepress-demo-preview](https://github.com/flingyp/vitepress-demo-preview)
- - [vitepress-theme-demoblock](https://github.com/xinlei3166/vitepress-theme-demoblock/tree/main)
- 🚧 code group 当前页联动, tabs 切换下划线动画
- ✅ nav sidebar 添加图标
- `mermaid`

  - [vitepress-plugin-mermaid](https://emersonbottero.github.io/vitepress-plugin-mermaid/)

- 🚧 页面切换动画
- 🚧 基于 nuxt/vue3/ts/unocss/nest/mongodb/redis/mysql 开发后台管理系统
- ✅ tools

  roadmap.sh

- 🚧 tree 组件展示 `tree` 命令结果, 语法可参照 [dumi - Tree](https://d.umijs.org/guide/markdown#tree)

  ```tree
  tree
  ```

## Reference

- [Tmiracle の 技术小站](https://blog.namichong.com/)
  - [vitepress-plugin-codeblocks-fold](https://github.com/T-miracle/vitepress-plugin-codeblocks-fold)
  - [vitepress-plugin-comment-with-giscus](https://github.com/T-miracle/vitepress-plugin-comment-with-giscus)

## BUG

以下代码块在展示时缺少部分行号 (当开启行号时):

```vue twoslash
<script setup lang="ts">
import {ref} from 'vue';

const message = ref('Hello world!');
</script>
```

## 数学公式

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**Maxwell's equations:**

| equation                                                                                                                                                                  | description                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of $\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_                                                                                 |

[//]: # ':::preview title || component description content'
[//]: #
[//]: # 'demo-preview=./.vitepress/theme/components/demo-test.vue'
[//]: #
[//]: # ':::'
