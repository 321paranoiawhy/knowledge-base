import{_ as d,i as h,A as e,N as a,p as n,l as s,ab as l,J as t,h as o}from"./chunks/framework.DriGdB-O.js";const W=JSON.parse('{"title":"Knowledge Base (WHY の 自留地)","description":"","frontmatter":{"breadcrumb":true,"pageInfo":true,"heatmap":true,"copyright":true},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1718161324000}'),c={name:"README.md"},k=e("h1",{id:"knowledge-base-why-の-自留地",tabindex:"-1"},[s("Knowledge Base (WHY の 自留地) "),e("a",{class:"header-anchor",href:"#knowledge-base-why-の-自留地","aria-label":'Permalink to "Knowledge Base (WHY の 自留地)"'},"​")],-1),b=e("p",null,"在线查看:",-1),g=e("img",{src:"https://img.shields.io/github/actions/workflow/status/321paranoiawhy/knowledge-base/deploy.yml",alt:"GitHub Actions Workflow Status",loading:"lazy"},null,-1),u=e("img",{src:"https://api.netlify.com/api/v1/badges/f5cbf133-9278-45eb-a702-250db1ed650a/deploy-status",alt:"Netlify Status",loading:"lazy"},null,-1),v=e("li",null,[e("p",null,"🚧 Cloudflare")],-1),f=e("img",{src:"https://knowledge-base-mauve-pi.vercel.app/api/321paranoiawhy/knowledge-base",alt:"Vercel",loading:"lazy"},null,-1),m=e("p",null,"技术栈及亮点:",-1),_=l("<li>基于 <code>vitepress</code> 和 <code>UnoCSS Docs</code> 并适当改造</li><li>自动生成 <code>nav</code> 和 <code>sidebar</code> 至 <code>.generated/navbar.json</code> 和 <code>.generated/sidebar.json</code></li>",2),y=e("code",null,"nolebase",-1),A=e("code",null,"Obsidian",-1),C=e("code",null,"Notion",-1),D=e("code",null,"git",-1),w=e("code",null,"md",-1),B=e("code",null,"Contributors",-1),T=e("code",null,"Changelog",-1),x=l(`<h2 id="脚本命令" tabindex="-1">脚本命令 <a class="header-anchor" href="#脚本命令" aria-label="Permalink to &quot;脚本命令&quot;">​</a></h2><p>使用 <code>pnpm</code> 安装依赖:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> i</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>本地开发调试:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>打包:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>预览:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs:preview</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>格式化:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> prettier</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>自动生成 <code>navbar</code> 和 <code>sidebar</code>:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 运行项目时会自动运行 ./vitepress/utils/auto-generate.js</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 这里只是提供另外一种不运行项目也可运行对应 ./vitepress/utils/auto-generated.js 的方式</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 运行成功后可查看 .generated/navbar.json 和 .generated/sidebar.json</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> generate:auto</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>由 <code>git commit</code> 生成 <code>heatmap</code>:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 文件位于 .generated/heatmap.json</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> generate:heatmap</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><h3 id="github" tabindex="-1">GitHub <a class="header-anchor" href="#github" aria-label="Permalink to &quot;GitHub&quot;">​</a></h3>`,17),N=e("h3",{id:"vercel",tabindex:"-1"},[s("Vercel "),e("a",{class:"header-anchor",href:"#vercel","aria-label":'Permalink to "Vercel"'},"​")],-1),P=l('<p>注意:</p><p>须在 <code>vercel</code> 后台添加环境变量:</p><div class="language-dotenv vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span># 这将使 `.vitepress/config.ts` 中 `base` 为 `/`</span></span>\n<span class="line"><span>VITE_BASE_ENV=&quot;development&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="netlify" tabindex="-1">Netlify <a class="header-anchor" href="#netlify" aria-label="Permalink to &quot;Netlify&quot;">​</a></h3>',4),S=l(`<h3 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h3><p>构建镜像:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> build</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> knowledge-base</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>运行:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -itd</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 8002:80</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> knowledge-base</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> knowledge-base</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>浏览器输入 <code>http://localhost:8002/knowledge-base</code> 即可查看</p><p>使用 <code>deploy.sh</code> 一键运行:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 避免 zsh: permission denied: ./deploy.sh</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># cd 至当前项目所在根目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chmod</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 777</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> deploy.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 运行 deploy.sh</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 运行成功后查看 http://localhost:8002/knowledge-base</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">./deploy.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,8);function E(V,q,I,j,G,H){const i=t("VPNolebaseInlineLinkPreview"),r=t("NolebaseGitContributors"),p=t("NolebaseGitChangelog");return o(),h("div",null,[k,b,e("ul",null,[e("li",null,[e("p",null,[a(i,{href:"https://321paranoiawhy.github.io/knowledge-base",target:"_blank",rel:"noreferrer"},{default:n(()=>[s("GitHub")]),_:1}),s(),g])]),e("li",null,[e("p",null,[a(i,{href:"https://why-knowledge-base.netlify.app/",target:"_blank",rel:"noreferrer"},{default:n(()=>[s("Netlify")]),_:1}),s(),a(i,{href:"https://app.netlify.com/sites/why-knowledge-base/deploys",target:"_blank",rel:"noreferrer"},{default:n(()=>[u]),_:1})])]),v,e("li",null,[e("p",null,[a(i,{href:"https://knowledge-base-mauve-pi.vercel.app/",target:"_blank",rel:"noreferrer"},{default:n(()=>[s("Vercel")]),_:1}),s(),f])])]),m,e("ul",null,[_,e("li",null,[y,s(" 系列插件 "),e("ul",null,[e("li",null,[a(i,{href:"https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-highlight-targeted-heading/",target:"_blank",rel:"noreferrer"},{default:n(()=>[s("@nolebase/vitepress-plugin-highlight-targeted-heading")]),_:1}),s(" 点击标题高亮展示之")]),e("li",null,[a(i,{href:"https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-inline-link-preview/getting-started",target:"_blank",rel:"noreferrer"},{default:n(()=>[s("@nolebase/vitepress-plugin-inline-link-preview")]),_:1}),s(" 鼠标悬停预览内部链接, 效果同 "),A,s(" 或 "),C]),e("li",null,[a(i,{href:"https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/",target:"_blank",rel:"noreferrer"},{default:n(()=>[s("@nolebase/vitepress-plugin-enhanced-readabilities")]),_:1})]),e("li",null,[a(i,{href:"https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-git-changelog/",target:"_blank",rel:"noreferrer"},{default:n(()=>[s("@nolebase/vitepress-plugin-git-changelog")]),_:1}),s(" 由 "),D,s(" 仓库信息获取相关信息并为每个 "),w,s(" 文件自动生成 "),B,s(" 和 "),T])])])]),x,e("ul",null,[e("li",null,[a(i,{href:"https://shields.io/badges/git-hub-actions-workflow-status",target:"_blank",rel:"noreferrer"},{default:n(()=>[s("GitHub Actions Workflow Status - shields.io")]),_:1})])]),N,e("ul",null,[e("li",null,[a(i,{href:"vercel.json"},{default:n(()=>[s("vercel.json 配置文件")]),_:1})]),e("li",null,[a(i,{href:"https://github.com/datejer/vercel-badge",target:"_blank",rel:"noreferrer"},{default:n(()=>[s("vercel-badge")]),_:1})])]),P,e("ul",null,[e("li",null,[a(i,{href:"https://docs.netlify.com/monitor-sites/status-badges/",target:"_blank",rel:"noreferrer"},{default:n(()=>[s("Status badges - Netlify")]),_:1})])]),S,a(r),a(p)])}const z=d(c,[["render",E]]);export{W as __pageData,z as default};
