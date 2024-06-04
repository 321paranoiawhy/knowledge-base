---
title: Vitepress Customize
tags: ['Vitepress']
---

# Vitepress Customize

## `Boolean` 布尔值

### `navbar`

是否展示 `navbar`, 默认 `true`

### `sidebar`

是否展示 `sidebar`, 默认 `true`

### `aside`

是否展示 `aside`, 即 `TOC (Table of Contents)`, 默认 `true`

### `editLink`

是否展示 `editLink`, 默认 `true`

### `lastUpdated`

是否展示 `lastUpdated`, 默认 `true`

### `footer`

是否展示 `footer`, 默认 `true`

### `breadcrumb`

是否展示面包屑 `breadcrumb`, 默认 `true`

### `gitChangelog`

是否展示 `Contributors` 和 `Changelog`, 默认 `true`

### `heatmap`

在 `layout: home` 页面是否展示文件提交历史 (基于 `git`) 热力图 `heatmap`, 默认 `true`

取消展示 `heatmap`:

```md
---
layout: home
heatmap: false
---
```

源码 (`vitepress` 首页入口文件 `index.md`):

```md
<client-only v-if="$frontmatter.heatmap"><Heatmap /></client-only>
```

## 完整示例

```md
---
navbar: false # 默认值 true
sidebar: false # 默认值 true
aside: false # 默认值 true
editLink: false # 默认值 true
lastUpdated: false # 默认值 true
footer: false # 默认值 true
breadcrumb: false # 默认值 true
gitChangelog: false # 默认值 true
heatmap: false # 默认值 true
---
```
