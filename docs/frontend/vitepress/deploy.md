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
<<< @/.github/workflows/deploy.yml
:::

## Nginx 配置

- [Nginx](https://vitepress.dev/guide/deploy#nginx)

::: details nginx.conf 示例
<<< @/nginx.conf
:::
