# 参考: https://juejin.cn/post/7306018817687322676
FROM node:20.11.1
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm@8.15.4 && pnpm install
RUN echo "[INFO] 依赖安装完成"
COPY . .

RUN echo '[INFO] 开始 build'
RUN pnpm docs:build
RUN echo '[INFO] build 完成'

FROM nginx:latest

RUN echo '[INFO] 拷贝 .vitepress/dist 至 nginx 目录'
COPY --from=0 /app/.vitepress/dist /usr/share/nginx/knowledge-base
COPY --from=0 /app/nginx.conf /etc/nginx/conf.d/default.conf
