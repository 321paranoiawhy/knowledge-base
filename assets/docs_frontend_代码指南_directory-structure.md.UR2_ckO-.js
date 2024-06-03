import{_ as i,i as p,A as s,N as e,p as o,l as n,ab as c,J as a,h as u}from"./chunks/framework.ZnYlerLY.js";const S=JSON.parse('{"title":"Directory Structure 目录结构","description":"","frontmatter":{"breadcrumb":true,"pageInfo":true,"heatmap":true,"copyright":true},"headers":[],"relativePath":"docs/frontend/代码指南/directory-structure.md","filePath":"docs/frontend/代码指南/directory-structure.md","lastUpdated":1717385859000}'),d={name:"docs/frontend/代码指南/directory-structure.md"},b=s("h1",{id:"directory-structure-目录结构",tabindex:"-1"},[n("Directory Structure 目录结构 "),s("a",{class:"header-anchor",href:"#directory-structure-目录结构","aria-label":'Permalink to "Directory Structure 目录结构"'},"​")],-1),h=s("h2",{id:"web",tabindex:"-1"},[n("Web "),s("a",{class:"header-anchor",href:"#web","aria-label":'Permalink to "Web"'},"​")],-1),m=s("p",null,"参考:",-1),_=c(`<div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span>└── src</span></span>
<span class="line"><span>    ├── api - 后端接口请求</span></span>
<span class="line"><span>    ├── assets - 静态资源, 其下可分 images/fonts/styles</span></span>
<span class="line"><span>    ├── components - 组件, 其下可分 common/</span></span>
<span class="line"><span>    ├── composables - 同 hooks, 如 useFetch.ts</span></span>
<span class="line"><span>    ├── directives - 自定义指令, 如 v-image.ts, v-loading.ts</span></span>
<span class="line"><span>    ├── env - 环境变量配置, 如 .env.local/.env.development/.env.test/.env.production</span></span>
<span class="line"><span>    ├── layouts - 通用布局, 如 default.vue, custom.vue</span></span>
<span class="line"><span>    ├── mixins - 混入, 多用于 Vue 2 项目, Vue 3 项目不建议使用, 可使用 hook 达到同一目的</span></span>
<span class="line"><span>    ├── pages - 页面</span></span>
<span class="line"><span>    ├── public - 公共资源, 不会被打包工具打包, 而是直接被原封不动地复制到打包后的 public 目录</span></span>
<span class="line"><span>    ├── stores - pinia 状态管理, 如 useUserStore.ts 或 user.ts</span></span>
<span class="line"><span>    ├── types - TS 类型声明文件, 如 global.d.ts/env.d.ts 及自动生成的类型文件 auto-imports.d.ts/components.d.ts</span></span>
<span class="line"><span>    └── utils - 与业务强相关的工具函数, 其它情形则可考虑使用 lodash/underscore/decimal/day.js 等工具库</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="小程序" tabindex="-1">小程序 <a class="header-anchor" href="#小程序" aria-label="Permalink to &quot;小程序&quot;">​</a></h2><h2 id="app" tabindex="-1">APP <a class="header-anchor" href="#app" aria-label="Permalink to &quot;APP&quot;">​</a></h2><h2 id="桌面端" tabindex="-1">桌面端 <a class="header-anchor" href="#桌面端" aria-label="Permalink to &quot;桌面端&quot;">​</a></h2>`,4);function f(v,g,k,y,P,x){const t=a("VPNolebaseInlineLinkPreview"),r=a("NolebaseGitContributors"),l=a("NolebaseGitChangelog");return u(),p("div",null,[b,h,m,s("ul",null,[s("li",null,[e(t,{href:"https://nuxt.com/docs/guide/directory-structure",target:"_blank",rel:"noreferrer"},{default:o(()=>[n("Directory Structure - Nuxt")]),_:1})])]),_,e(r),e(l)])}const C=i(d,[["render",f]]);export{S as __pageData,C as default};
