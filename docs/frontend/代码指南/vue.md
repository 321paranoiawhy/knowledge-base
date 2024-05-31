# Vue

- [Style Guide](https://vuejs.org/style-guide/)

## 通用

- 文件夹和文件命名均使用 `kebab-case`, `Vue` 文件内变量、函数、类仍使用 `camelCase` 命名
- `template` 中标签或组件尽可能[自闭合](https://vuejs.org/style-guide/rules-strongly-recommended.html#self-closing-components)

  如 `<base-loading></base-loading>` -> `<base-loading />`

- 单文件组件 (`SFC`) 尽可能只包含一个 `template`、`script` 和 `style` 标签, 不建议多个上述标签一起使用
- `Vue2` 标签排布顺序为 `template -> script -> style`, `Vue3` 建议标签排布顺序为 `script -> template -> style`, 并使用 `<script setup lang="ts">` 语法
- 可复用逻辑尽可能抽离成 `hook`, 置于 `src/composables` 文件夹
- 布局置于 `src/layouts` 文件夹
- 组件置于 `src/components` 文件夹
- 状态管理, `Vuex` 置于 `src/modules` 文件夹, `Pinia` 置于 `src/stores` 文件夹, 文件命名为 `useFoo.ts`
- `v-for` 必须使用 `key`, 只能使用原始值,
  纯静态列表则可使用 `index` 作为 `key`, 其余情况推荐使用唯一 `id` 作为 `key`
- 避免 `v-for` 和 `v-if` 连用, 二者优先级与 `Vue` 版本相关, 在 `Vue3` 中 `v-if` 优先级高于 `v-for`,
  可以使用计算属性或在 `v-for` 中提前计算出所需对象以规避 `v-if`
- 指令或者插槽均使用简写语法: `:value`、`@click`、`<template #header>`,
  避免 `v-bind:value`、`v-on:click`、`v-slot:header`

## 组件

- 组件文件名使用 `kebab-case`, 如 `src/components/base-loading.vue`, 组件始终使用多字符,
  以避免与已有或未来新增的原生 `HTML` 元素冲突。
- 组件命名可冠以前缀, 如公司名称、项目缩写或 `common-`、`base-`、`app-` 等
- 组件 `props` 应尽可能详尽, 包括类型 (`type`)、默认值 (`default`) 及合法验证 (`validate`)
- 非原始值类型的 `prop` 默认值使用函数返回: `default: () => []`, 严禁使用 `default: []`
- 使用组件时, `prop` 应以 `kebab-case` 形式传入, 如 `:custom-prop="1"`
- 布尔值类型的 `prop`, 当其值为 `true` 时, 可只书写该属性, 如 `require-auth`,
  当其值为 `false` 时, 则应为 `:require-auth="false"`

在 `script` 中引入和注册组件:

```vue
<template>
  <!--  以 kebab-case 形式使用 -->
  <base-loading />
</template>

<script>
// BaseLoading 大驼峰, @ 为路径别名, 文件路径不带扩展名, 如 `.js,.ts,.vue`
import BaseLoading from '@/components/base-loading';
export default {
  components: {
    // Vue2 中组件注册推荐使用对象简写语法
    // 等价于 BaseLoading: BaseLoading,
    BaseLoading
  }
};
</script>
```

`Vue3` 写法:

```vue
<script setup lang="ts">
import BaseLoading from '@/components/base-loading';
</script>

<template>
  <base-loading />
</template>
```

### 封装原则

- 通用的非业务组件尽可能不带样式, 仅保留必要的布局和少量样式
- 纯业务组件可仅满足业务需要, 但仍应预留未来变更的适应能力
- 组件遵循单项数据流, `props` 完全受控于父组件, 切忌在子组件内修改父组件传递的 `props`
- 组件职责应明确, 不可过于混乱, 单组件文本行数建议不超过 `200` 行
- 组件应向外暴露各种定制能力, 包括样式和逻辑, 并在适当之处预留插槽
- `style` 标签必须使用 `scoped` 属性, 须样式穿透时使用 `:deep()` 语法, 不建议使用 `/deep/`、`::v-deep` 和 `>>>` 等过时语法

## 引入语句

- 引入语句中不带文件扩展名
- 尽可能使用路径别名引入, 以避免过深的路径 `../../../file`
- 引入语句须按一定的排序规则进行排序, 以提高统一度和可阅读性

### 排序

## 常用代码片段

```js
const arr = ['a', 'b', 'c'];

// 与 -1 比较
arr.indexOf('a') !== -1; // true
// 可用于 indexOf / lastIndexOf / findIndex / findLast / findLastIndex
~arr.indexOf('a'); // -2
~arr.indexOf('d'); // 0

// 四舍五入
parseInt(2.5, 10); // 2
~~2.5; // 2
```
