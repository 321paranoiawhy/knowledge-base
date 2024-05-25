#!/usr/bin/env sh

# 参考 https://cvnine.github.io/vitepress-rc/guide/deploy.html#github-pages

# abort on errors
set -e

# build
pnpm docs:build

# navigate into the build output directory
cd .vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:321paranoiawhy/knowledge-base.git main:gh-pages

cd -
