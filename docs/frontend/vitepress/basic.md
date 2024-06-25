---
title: Vitepress Basic
tags: ['Vitepress']
---

# Vitepress Basic

## `Table of Contents` 目录

```md
[[toc]]
```

## `Code Block` 代码块

- [Line Numbers 左侧展示行号](https://vitepress.dev/guide/markdown#line-numbers)

  可全局开启:

  ```ts
  // .vtepress/config.ts
  export default defineConfig({
    markdown: {
      // 所有 code block 均显示行号
      lineNumbers: true
    }
  });
  ```

  局部开启:

  ````md
  ```js :line-numbers
  console.log('Hello world!');
  ```
  ````

  ```js :line-numbers
  console.log('Hello world!');
  ```

  起始编号 `0` (默认为 `1`):

  ````md
  ```js :line-numbers=0
  console.log('Hello world!');
  ```
  ````

  ```js :line-numbers=0
  console.log('Hello world!');
  ```

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

  ```md
  <<< @/filepath
  ```

::: tip
`Vitepress` 会自动由文件扩展名设置相应高亮语言, 如不合适或有自定义需求:

```md
<<< @/filepath{js}
```

:::

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

- [Focus 聚焦指定行](https://vitepress.dev/guide/markdown#focus-in-code-blocks)

  ````
  ```js
  export default {
    data () {
      return {
        msg: 'Focused!' // [!!code focus]
      }
    }
  }
  ```
  ````

  ```js
  export default {
    data() {
      return {
        msg: 'Focused!' // [!code focus]
      };
    }
  };
  ```

- `twoslash`

  得益于 [@shikijs/vitepress-twoslash](https://shiki.style/packages/vitepress#twoslash),
  在代码块中加入 `twoslash` 即可实现类 `IDE` 的内联类型提示, 支持 `ts` 和 `Vue` 代码块:

  ````md
  ```vue twoslash
  <script setup lang="ts">
  import {ref} from 'vue';

  const message = ref('Hello world!');
  </script>
  ```
  ````

  ```vue twoslash
  <script setup lang="ts">
  import {ref} from 'vue';

  const message = ref('Hello world!');
  </script>
  ```

## `Callout`

- [Custom Containers](https://vitepress.dev/guide/markdown#custom-containers)
- [GitHub-flavored Alerts](https://vitepress.dev/guide/markdown#github-flavored-alerts)

支持以下类别:

- `info`
- `tip`
- `warning`
- `danger`
- `details`

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
console.log('Hello, VitePress!');
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
console.log('Hello, VitePress!');
```

:::

## `Layout`

- [Layout](https://vitepress.dev/reference/default-theme-layout)

`Layout` 默认值为 `doc`, 可选值为:

- `doc`
- `page`
- `home`

可在 `md` 文件的 `frontmatter` 中配置, 如配置 `layout: false` 则不使用任何布局。

使用自定义布局:

```md
---
layout: foo
---
```

## `Frontmatter`

- `title` 标题, 会出现在 `head title` 标签中, 等同于 `TDK` 中的 `T`

  ::: tip
  `TDK` 为 `Title`、`Description` 和 `Keywords` 三个单词首字母合写, 为 `SEO` 常用术语
  :::

- `description` 描述, 等同于 `TDK` 中的 `D`
- `keyword` 关键词, 等同于 `TDK` 中的 `K`
- `tag/tags` 标签
- `layout` 布局, 默认值为 `doc`， 可选值
  - `doc`
  - `page`
  - `home`
  - `custom` 自定义布局
- `sidebar` 是否显示侧边栏 `sidebar`

在 `vue` 模板中使用:

```vue
<template>
  <div>{{ $frontmatter }}</div>
</template>
```

在 `vue` 脚本中使用:

```vue twoslash
<script setup lang="ts">
import {useData} from 'vitepress';

// frontmatter 为响应式数据 (Ref)
const {frontmatter} = useData();
</script>
```

在 `md` 中使用:

```md
{{$frontmatter}}
```

注入 `frontmatter`:

```ts
// .vitepress/config.ts
export default defineConfig({
  // ...
  transformPageData(pageData) {
    // 须注入 frontmatter 的键值对
    const inject = {
      breadcrumb: true,
      pageInfo: true,
      heatmap: true,
      copyright: true
    };

    Object.keys(inject).forEach(key => {
      // 如 md frontmatter 中未配置该属性, 则使用默认值
      !(key in pageData.frontmatter) && (pageData.frontmatter[key] = inject[key as keyof typeof inject]);
    });
  }
});
```

## `withBase`

- [Runtime API withBase](https://vitepress.dev/reference/runtime-api#withbase)

```vue
<script setup lang="ts">
import {withBase} from 'vitepress';
</script>

<template>
  <!-- 指向根路由 -->
  <a :href="withBase('/')">Home</a>
</template>
```

## `*.data.js` 或 `*.data.ts`

- [Build-Time Data Loading](https://vitepress.dev/guide/data-loading#build-time-data-loading)

`example.data.js`:

```ts
import fs from 'fs';
import grayMatter from 'gray-matter';

export default {
  // ! 无法 watch md frontmatter 内容变动, 须重启方生效
  watch: ['docs/**/*.md'],
  load(files) {
    const json = files.map(file => {
      const content = fs.readFileSync(file, 'utf-8');

      const {data} = grayMatter(content);
      return data;
    });

    return json;
  }
};
```

使用:

```vue
<script setup lang="ts">
import {data as exampleData} from './example.data.js';
</script>

<template>
  <div>{{ exampleData }}</div>
</template>
```

::: tip
`Vitepress` 在运行时会运行 `*.data.js` 中的 `load` 函数, 并使用命名导出了 `data` 变量

为避免变量名冲突, 建议引入时使用 `as` 别名:

```js
import {data as exampleData} from './example.data.js';
```

:::

## `Emoji`

- [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)

常用的 `emoji`:

```md
:white_check_mark:
:x:
:copyright:
:registered:
:construction:
```

```md
✅
❌
©️
®️
🚧
```

## 脚注

这是一个脚注[^1]

[^1]: 这是一个脚注
