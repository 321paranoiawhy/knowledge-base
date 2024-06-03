# Knowledge Base (WHY の 自留地)

在线查看:

- [GitHub](https://321paranoiawhy.github.io/knowledge-base)
- 🚧 Netlify
- 🚧 Cloudflare
- 🚧 Vercel

技术栈及亮点:

- 基于 `vitepress`
- 参考 `UnoCSS Docs` 适当改造
- 自动生成 `nav` 和 `sidebar` 至 `.generated/navbar.json` 和 `.generated/sidebar.json`
- `nolebase` 系列插件
  - [@nolebase/vitepress-plugin-highlight-targeted-heading](https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-highlight-targeted-heading/)
    点击标题高亮展示之
  - [@nolebase/vitepress-plugin-inline-link-preview](https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-inline-link-preview/getting-started)
    鼠标悬停预览内部链接, 效果同 `Obsidian` 或 `Notion`
  - [@nolebase/vitepress-plugin-enhanced-readabilities](https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/)
  - [@nolebase/vitepress-plugin-git-changelog](https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-git-changelog/)
    由 `git` 仓库信息获取相关信息并为每个 `md` 文件自动生成 `Contributors` 和 `Changelog`

## 脚本命令

使用 `pnpm` 安装依赖:

```bash
pnpm i
```

本地开发调试:

```bash
pnpm docs:dev
```

打包:

```bash
pnpm docs:build
```

预览:

```bash
pnpm docs:preview
```

格式化:

```bash
pnpm prettier
```

自动生成 `navbar` 和 `sidebar`:

```bash
# 运行项目时会自动运行 ./vitepress/utils/auto-generate.js
# 这里只是提供另外一种不运行项目也可运行对应 ./vitepress/utils/auto-generated.js 的方式
# 运行成功后可查看 .generated/navbar.json 和 .generated/sidebar.json
pnpm generate:auto
```
