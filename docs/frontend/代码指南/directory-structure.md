# Directory Structure 目录结构

## Web

参考:

- [Directory Structure - Nuxt](https://nuxt.com/docs/guide/directory-structure)

```txt
└── src
    ├── api - 后端接口请求
    ├── assets - 静态资源, 其下可分 images/fonts/styles
    ├── components - 组件, 其下可分 common/
    ├── composables - 同 hooks, 如 useFetch.ts
    ├── directives - 自定义指令, 如 v-image.ts, v-loading.ts
    ├── env - 环境变量配置, 如 .env.local/.env.development/.env.test/.env.production
    ├── layouts - 通用布局, 如 default.vue, custom.vue
    ├── mixins - 混入, 多用于 Vue 2 项目, Vue 3 项目不建议使用, 可使用 hook 达到同一目的
    ├── pages - 页面
    ├── public - 公共资源, 不会被打包工具打包, 而是直接被原封不动地复制到打包后的 public 目录
    ├── stores - pinia 状态管理, 如 useUserStore.ts 或 user.ts
    ├── types - TS 类型声明文件, 如 global.d.ts/env.d.ts 及自动生成的类型文件 auto-imports.d.ts/components.d.ts
    └── utils - 与业务强相关的工具函数, 其它情形则可考虑使用 lodash/underscore/decimal/day.js 等工具库
```

## 小程序

## APP

## 桌面端
