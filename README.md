# Knowledge Base (WHY の 自留地)

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/321paranoiawhy/knowledge-base/deploy.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f5cbf133-9278-45eb-a702-250db1ed650a/deploy-status)](https://app.netlify.com/sites/why-knowledge-base/deploys)
![Vercel](https://vercelbadge.vercel.app/api/321paranoiawhy/knowledge-base)

在线查看:

- [GitHub](https://321paranoiawhy.github.io/knowledge-base)
- [Netlify](https://why-knowledge-base.netlify.app/)
- 🚧 Cloudflare
- [Vercel](https://knowledge-base-mauve-pi.vercel.app/)

技术栈及亮点:

- 基于 `vitepress` 和 `UnoCSS Docs` 并适当改造
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

由 `git commit` 生成 `heatmap`:

```bash
# 文件位于 .generated/heatmap.json
pnpm generate:heatmap
```

## 部署

### GitHub

- [GitHub Actions Workflow Status - shields.io](https://shields.io/badges/git-hub-actions-workflow-status)

### Vercel

- [vercel.json 配置文件](vercel.json)
- [vercel-badge](https://github.com/datejer/vercel-badge)

  `Vercel` 构建徽标

- 关闭 `preview build`:
  - [Turning off Preview Deployments](https://vercel.com/docs/deployments/preview-deployments#turning-off-preview-deployments)
  - [How do I use the "Ignored Build Step" field on Vercel?](https://vercel.com/guides/how-do-i-use-the-ignored-build-step-field-on-vercel)
  - [Ignored Build Step](https://vercel.com/docs/projects/overview#ignored-build-step)
- 仅监听 `main` 分支变动: 判断 `VERCEL_GIT_COMMIT_REF` 环境变量值是否等于 `main` 即可

注意:

须在 `vercel` 后台添加环境变量:

```dotenv
# 这将使 `.vitepress/config.ts` 中 `base` 为 `/`
VITE_BASE_ENV="development"
```

### Netlify

- [Status badges - Netlify](https://docs.netlify.com/monitor-sites/status-badges/)

### Docker

构建镜像:

```bash
docker build -t knowledge-base .
```

运行:

```bash
docker run -itd -p 8002:80 --name knowledge-base knowledge-base
```

浏览器输入 `http://localhost:8002/knowledge-base` 即可查看

使用 `deploy.sh` 一键运行:

```bash
# 避免 bash/zsh: permission denied: ./deploy.sh
# cd 至当前项目所在根目录
chmod 777 deploy.sh

# 运行 deploy.sh
# 运行成功后查看 http://localhost:8002/knowledge-base
./deploy.sh
```
