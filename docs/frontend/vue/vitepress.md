## Table of Contents 目录

````md
[[toc]]
````

## Code Block 代码块

- [高亮指定行](https://vitepress.dev/guide/markdown#line-highlighting-in-code-blocks)

  ````
  ```js{4}
  export default {
    data () {
      return {
        msg: 'Highlighted!'
      }
    }
  }
  ```
  ````

  ```js{4}
  export default {
    data () {
      return {
        msg: 'Highlighted!'
      }
    }
  }
  ```
- [diff](https://vitepress.dev/guide/markdown#colored-diffs-in-code-blocks)

  在代码同一行使用单行注释 `// [!code --]` 或 `// [!code ++]` 表示代码的增减
  ````
  ```js
  export default {
    data () {
      return {
        msg: 'Removed' // [!!code --]
        msg: 'Added' // [!!code ++]
      }
    }
  }
  ```
  ````

  ```js
  export default {
    data () {
      return {
        msg: 'Removed' // [!code --]
        msg: 'Added' // [!code ++]
      }
    }
  }
  ```

- [引入文件作为代码块](https://vitepress.dev/guide/markdown#import-code-snippets)

  ````md
  <<< @/filepath
  ````
- [Code Groups](https://vitepress.dev/guide/markdown#code-groups)

  ````md
  ::: code-group
  ```bash [pnpm]
  pnpm add @unocss/reset
  ```
  ```bash [yarn]
  yarn add @unocss/reset
  ```
  ```bash [npm]
  npm install @unocss/reset
  ```
  :::
  ````

  ::: code-group
  ```bash [pnpm]
  pnpm add @unocss/reset
  ```
  ```bash [yarn]
  yarn add @unocss/reset
  ```
  ```bash [npm]
  npm install @unocss/reset
  ```
  :::

## Callout

- [Custom Containers](https://vitepress.dev/guide/markdown#custom-containers)
- [GitHub-flavored Alerts](https://vitepress.dev/guide/markdown#github-flavored-alerts)

````md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
````

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

## Emoji

Input:

````md
:100:
````

Output:

:100:

可[在此查看](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)所有支持的 `emoji`

## Layout

- [Layout](https://vitepress.dev/reference/default-theme-layout)

`Layout` 默认值为 `doc`, 可选值为:

- `doc`
- `page`
- `home`

可以在 `md` 文件的 `frontmatter` 中配置, 如配置 `layout: false` 则不使用任何布局。

使用自定义布局:

````md
---
layout: foo
---
````

---
layout: foo
---

## frontmatter

- `title` 标题, 会出现在 `head title` 标签中, 等同于 `TDK` 中的 `T`
- `description` 描述, 等同于 `TDK` 中的 `D`
- `keyword` 关键词, 等同于 `TDK` 中的 `K`
- `tag/tags` 标签
- `layout` 布局, 默认值为 `doc`, 可选值为 `doc/page/home`
- `sidebar` 是否显示侧边栏 `sidebar`
