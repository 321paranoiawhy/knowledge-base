# Deploy

## 打包部署

```bash
# 打包后的文件目录 .vitepress/dist
pnpm docs:build
```

### Docker

`Mac OS Catalina 10.15.7` 安装 `Docker`:

- [amd64 Docker.dmg](https://desktop.docker.com/mac/main/amd64/93002/Docker.dmg)
- [arm64 Docker.dmg](https://desktop.docker.com/mac/main/arm64/93002/Docker.dmg)
- [Mac 10.15 catalina 安装 docker 记录](https://blog.kelu.org/software/2024/01/02/docker-for-mac-catalina.html)

```bash
docker version

docker ps
```

构建镜像:

```bash
docker build -t knowledge-base .
```

运行:

```bash
docker run -itd -p 8002:80 --name knowledge-base knowledge-base
```

浏览器输入 `http://localhost:8002` 即可查看

使用 `deploy.sh` 一键运行:

```bash
# 避免 zsh: permission denied: ./deploy.sh
# cd 至当前项目所在根目录
chmod 777 deploy.sh

# 运行 deploy.sh
# 运行成功后查看 http://localhost:8002
./deploy.sh
```

::: details deploy.sh
<<< @/deploy.sh
:::

### GitHub

- [GitHub Pages](https://vitepress.dev/guide/deploy#github-pages)

::: details .github/workflows/deploy.yml

```yaml
name: Deploy

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  deploy:
    permissions:
      contents: write
    concurrency:
      group: pages
      cancel-in-progress: false
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 20.11.1
      - run: npm i pnpm@8.15.4 -g
      - run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .vitepress/dist
```

:::

## Nginx 配置

- [Nginx](https://vitepress.dev/guide/deploy#nginx)

::: details nginx.conf 示例

```nginx
server {
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    listen 80;
    server_name _;
    index index.html;

    location / {
        # content location
        root /app;

        # exact matches -> reverse clean urls -> folders -> not found
        try_files $uri $uri.html $uri/ =404;

        # non existent pages
        error_page 404 /404.html;

        # a folder without index.html raises 403 in this setup
        error_page 403 /404.html;

        # adjust caching headers
        # files in the assets folder have hashes filenames
        location ~* ^/assets/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

:::
