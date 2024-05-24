# Knowledge Base (WHY の 自留地)

在线查看:

- [GitHub](https://321paranoiawhy.github.io/knowledge-base)
- 🚧 Netlify
- 🚧 Cloudflare

技术栈及亮点:

- 基于 `vitepress`
- 参考 `UnoCSS Docs`
- 适当改造
- - 自动生成 `nav` 和 `sidebar` 至 `.generated/nav.json` 和 `.generated/sidebar.json`

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

自动生成 `nav` 和 `sidebar`:
```bash
pnpm generate:index
```
