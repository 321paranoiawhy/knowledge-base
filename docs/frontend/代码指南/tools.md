# Tools 工具合集

## 前置

安装 `husky` 和 `lint-staged`

```bash
pnpm add -D husky lint-staged

pnpm husky install
```

常用的 [git 钩子](https://git-scm.com/docs/githooks):

- `pre-commit`, 提交代码信息之前
- `commit-msg`, 提交代码信息时
- `post-commit`, 提交代码信息之后
- `pre-push`, 推送代码之前

:::tip
如果在提交代码时因报错而终止提交代码, 此时可能会丢失代码, 可执行以下命令:

```bash
# 查看 stash 命令帮助
# git stash --help

# 列出所有 stash
git stash list
# 预期输出示例
# 丢失的代码被 lint-staged 存储在 stash 中了
# stash@{0}: lint-staged automatic backup

# 恢复(栈顶)代码并删除 stash
git stash pop
# git stash pop 等价于以下两条命令
git stash apply
git stash drop

# 恢复到指定的 stash, 0 指向栈顶, 对应最新丢失的代码
git stash apply stash@{0}

# 清空所有 stash
git stash clear
```

:::

## Linters

### eslint

安装:

```bash
pnpm add -D eslint
```

### prettier

```bash
pnpm add -D prettier
```

安装 `eslint-config-prettier` 以避免 `eslint` 和 `prettier` 冲突:

```bash
pnpm add -D eslint-config-prettier
```

并在 `.eslintrc.js` 中给 `extends` 增加 `prettier`

### stylelint

```bash
pnpm add -D stylelint stylelint-config-standard stylelint-config-standard-scss postcss-html stylelint-config-recommended-vue
```

### markdownlint

```bash
pnpm add -D markdownlint-cli
```

### commitlint

使用 `commitlint` 包规范化代码提交信息

可参考信息:

- [代码提交规范](https://commitlint.js.org/)
- [Commit message 和 Change log 编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

安装:

```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional
```

代码提交规范如下:

- **build** 打包构建相关
- **ci** CI / CD 相关, 如 GitHub Actions/Jenkins/GitLab CI/Travis
- **docs** 文档相关, 如 README.md
- **feat** 功能相关
- **fix** BUG 相关
- **perf** 性能优化
- **refactor** 重构代码， 推荐一本书 《Refactoring: Improving the Design of Existing Code》(重构: 改善既有代码的设计)
- **style** 代码格式化等
- **test** 测试相关, 如测试用例
- **revert** 代码回滚, 须附上被撤销的 commit SHA 标识符
- **chore** 不属于以上类型的其他类型

代码提交示例:

```bash
# 注意, [type] 其后必须有空格
# [type] commit message
git commit -m 'feat: init'
```

### cz-commitlint

```bash
pnpm add -D @commitlint/cz-commitlint commitizen

# npx commitizen init cz-conventional-changelog --save-dev --save-exact
pnpm dlx commitizen init cz-conventional-changelog --save-dev --save-exact
```

`package.json` 配置:

```json
{
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
}
```

使用以下命令进入可交互式提交代码命令行:

```bash
pnpm commit
```

也可使用传统的提交代码方式:

```bash
git commit -m 'feat: init'
```

## CHANGELOG

安装 `conventional-changelog-cli`:

```bash
pnpm add -D conventional-changelog-cli
```

`package.json` 配置脚本命令:

```json
{
  "scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
  }
}
```

`type` 为 `feat/fix/perf/revert` 会出现在 `CHANGELOG.md` 中,
其余类型的提交信息则不会出现在 `CHANGELOG.md` 中

## EditorConfig

`EditorConfig` 用于记录编辑器配置, 以抹平编辑器差异。
`VS Code` 可在插件市场中搜索 `EditorConfig` 并下载。

## nvm 和 nrm

### nvm

`nvm` 用于 `node` 多版本管理, 可视化工具 [nvm-desktop](https://github.com/1111mp/nvm-desktop)

### nrm

`nrm` 用于 `node` 镜像源管理

```bash
pnpm add nrm -g
```

查看当前可使用的镜像源:

```bash
nrm ls
```

其输出结果为:

```
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```

切换镜像源:

```bash
nrm use tencent
```

## 版本控制

- [standard-version](https://github.com/conventional-changelog/standard-version)
- [release-it](https://github.com/release-it/release-it)

## 埋点/监控

- [FunDebug](https://www.fundebug.com/)
- [Sentry](https://sentry.io/welcome/)
- [Google Analytics](https://marketingplatform.google.com/about/analytics/)
- [PageSpy](https://www.pagespy.org/)
- [page-spy-uniapp](https://www.npmjs.com/package/@huolala-tech/page-spy-uniapp)
- [LogRocket](https://lp.logrocket.com/blg/vue-signup)

## 文档

- [Typedoc](https://typedoc.org/) 基于项目内的 `ts` 文件自动生成 `html` 或 `md` 文件
- [Storybook](https://storybook.js.org/) 通过 `*.stories` 文件自动生成组件文档, 可在网页上查看和调试
- [VuePress](https://vuepress.vuejs.org/)
- [VitePress](https://vitepress.dev/)
- [Astro](https://astro.build/)
- [Docusaurus](https://docusaurus.io/)
- [Docsify](https://docsify.js.org)
- [dumi](https://d.umijs.org/)
- [Rspress](https://rspress.dev/)

## 测试

- [Jest](https://jestjs.io/)
- [Vitest](https://vitest.dev/)
- [cypress](https://www.cypress.io/)
- [jsbenchmark](https://jsbenchmark.com/)

## 性能优化

- `Chrome DevTools Performance` 调试面板 `Performance`
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) 可以在命令行、项目内或 `Chrome Devtools` 中使用
- [WebPageTest](https://www.webpagetest.org/)

## 插件

### VS Code 插件

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Nuxt Extension Pack](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxt-vscode-extentions)
- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame)
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Material Theme Icons](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons)
- [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
- [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)
- [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
- [GitLab Workflow](https://marketplace.visualstudio.com/items?itemName=GitLab.gitlab-workflow)
- [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)

### 浏览器插件

- `Allow CORS`

  - [Chrome](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/)

  跨域请求插件, 可代替 `JSONP` 或配置代理

- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html)
- `Vue force dev`

  - [Chrome](https://chromewebstore.google.com/detail/vue-force-dev/oohfffedbkbjnbpbbedapppafmlnccmb?hl=en)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-force-dev/)

- `Wappalyzer`

  可查看网站所使用的技术栈

  - [Chrome](https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg?hl=en)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/wappalyzer/)

- `FeHelper`

  JSON自动格式化、手动格式化，支持排序、解码、下载等

  - [Chrome](https://chromewebstore.google.com/detail/fehelper%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8B/pkgccpejnmalmdinmhkkfafefagiiiad?hl=zh-CN)
  - [官网下载](https://www.baidufe.com/fehelper/index/index.html)

## 接口

### 调试

- [curl](https://curl.se/)
- [HTTPie](https://httpie.io/)
- [Apifox](https://apifox.com/)
- [Postman](https://www.postman.com/)
- [hoppscotch](https://hoppscotch.io/)
- [Insomnia](https://insomnia.rest/)
- [Apizza](https://www.apizza.net/)
- [ShowDoc](https://www.showdoc.com.cn/)
- [Fast Request](https://api-buddy.com/en/)
- [apihug](https://github.com/apihug/apihug.com)
- [REST Client - VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

### Mock

- [Mock](https://github.com/nuysoft/Mock)
- [Mock Service Worker](https://mswjs.io/)

## JSON

- [quicktype](https://app.quicktype.io/)

  由 `JSON` 自动生成相应的 `Model` 或 `TypeSctipt` 等类型文件

- [JSON Crack](https://jsoncrack.com/)

  在线可视化 `JSON`

- [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/)

  `JSON` 格式化和校验工具

## 动画

- [Whirl](https://whirl.netlify.app/)
- [CSS Loaders](https://css-loaders.com/)
- [loading.io](https://loading.io/)
- [GSAP](https://gsap.com/) 可实现视差滚动等动画特效
- [LottieFiles](https://lottiefiles.com/)

  `Airbnb` 开源的 `Lottie` 技术, 基于 `JSON` 文件实现动画, 多平台支持

### Echarts

TODO

## 正则

- [regex101](https://regex101.com/)
- [regexper](https://regexper.com/)

## Auth

- [Auth0](https://auth0.com/)
- [JustAuth](https://www.justauth.cn/)
- [supabase](https://supabase.com/)
- [firebase](https://firebase.google.com/)
- [Sa-Token](https://sa-token.cc/)

## UI 组件库

### Vue2

- [Element](https://element.eleme.io)

### Vue3

- [Element Plus](https://element-plus.org)
- [Ant Design Vue](https://antdv.com/components/overview)

  支付宝出品

- [Wot Design](https://ftf.jd.com/wot-design/#/components/introduction)

  基于京东商家侧的 `UI` 设计规范（京麦移动端设计规范）开发

- [Wot Design Uni](https://wot-design-uni.pages.dev/)

  参照 `Wot Design` 设计规范, 基于 `Vue3` 和 `TS` 开发的 `uniapp` 组件库

- [Arco Design Vue](https://arco.design/vue)

  字节跳动出品

- [TDesign Vue-Next](https://tdesign.tencent.com/vue-next)

  腾讯出品

- [Vuetify](https://vuetifyjs.com/en/)
- [NuxtUI](https://ui.nuxt.com/)

  `Nuxt` 团队出品
