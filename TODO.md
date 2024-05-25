# TODO / Plan

- ✅ nprogress

  可使用插件 [vitepress-plugin-nprogress](https://github.com/ZhongxuYang/vitepress-plugin-nprogress)

  安装 `nprogress` 依赖:

  ```bash
  pnpm add nprogress @types/nprogress -D
  ```

  [手动实现] 在布局文件中使用:

  ```vue
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

- ✅ 评论 giscus

  ```bash
  pnpm add vitepress-plugin-comment-with-giscus -D
  ```

- 🚧 标签及标签页 tags
- 🚧 归档 archive (按年份降序, 提供排序切换)
- 🚧 Heading 前置 H1 ~ H6
- [vitepress 插件合集](https://chodocs.cn/program/vitepress-plugin/)
- 🚧 embed, 如 codepen
- 🚧 代码块折叠功能 (带动画)
- 🚧 复刻 medium-zoom 至 uniapp

  ```bash
  pnpm add medium-zoom -D
  ```

- 🚧 面包屑 breadcrumb
- 🚧 useSetting 右侧边呼出
- 🚧 付费阅读
- 🚧 demo 组件
- - [vitepress-demo-preview](https://github.com/flingyp/vitepress-demo-preview)
- - [vitepress-theme-demoblock](https://github.com/xinlei3166/vitepress-theme-demoblock/tree/main)
- 🚧 code group 当前页联动, tabs 切换下划线动画
- ✅ nav sidebar 添加图标
- 🚧 页面切换动画
- ✅ 基于 nuxt/vue3/ts/unocss/nest/mongodb/redis/mysql 开发后台管理系统
- ✅ tools

  roadmap.sh

- ✅ tree 组件展示 `tree` 命令结果, 语法可参照 [dumi - Tree](https://d.umijs.org/guide/markdown#tree)

  ```tree
  tree
  ```

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
