import{_ as n,i as t,N as s,ab as l,h,J as a}from"./chunks/framework.VXGdQafs.js";const y=JSON.parse('{"title":"Vitepress Customize","description":"","frontmatter":{"title":"Vitepress Customize","tags":["Vitepress"],"breadcrumb":true,"pageInfo":true,"heatmap":true,"copyright":true},"headers":[],"relativePath":"docs/frontend/vitepress/customize.md","filePath":"docs/frontend/vitepress/customize.md","lastUpdated":1717483669000}'),d={name:"docs/frontend/vitepress/customize.md"},p=l('<h1 id="vitepress-customize" tabindex="-1">Vitepress Customize <a class="header-anchor" href="#vitepress-customize" aria-label="Permalink to &quot;Vitepress Customize&quot;">​</a></h1><h2 id="boolean-布尔值" tabindex="-1"><code>Boolean</code> 布尔值 <a class="header-anchor" href="#boolean-布尔值" aria-label="Permalink to &quot;`Boolean` 布尔值&quot;">​</a></h2><h3 id="navbar" tabindex="-1"><code>navbar</code> <a class="header-anchor" href="#navbar" aria-label="Permalink to &quot;`navbar`&quot;">​</a></h3><p>是否展示 <code>navbar</code>, 默认 <code>true</code></p><h3 id="sidebar" tabindex="-1"><code>sidebar</code> <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;`sidebar`&quot;">​</a></h3><p>是否展示 <code>sidebar</code>, 默认 <code>true</code></p><h3 id="aside" tabindex="-1"><code>aside</code> <a class="header-anchor" href="#aside" aria-label="Permalink to &quot;`aside`&quot;">​</a></h3><p>是否展示 <code>aside</code>, 即 <code>TOC (Table of Contents)</code>, 默认 <code>true</code></p><h3 id="editlink" tabindex="-1"><code>editLink</code> <a class="header-anchor" href="#editlink" aria-label="Permalink to &quot;`editLink`&quot;">​</a></h3><p>是否展示 <code>editLink</code>, 默认 <code>true</code></p><h3 id="lastupdated" tabindex="-1"><code>lastUpdated</code> <a class="header-anchor" href="#lastupdated" aria-label="Permalink to &quot;`lastUpdated`&quot;">​</a></h3><p>是否展示 <code>lastUpdated</code>, 默认 <code>true</code></p><h3 id="footer" tabindex="-1"><code>footer</code> <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;`footer`&quot;">​</a></h3><p>是否展示 <code>footer</code>, 默认 <code>true</code></p><h3 id="breadcrumb" tabindex="-1"><code>breadcrumb</code> <a class="header-anchor" href="#breadcrumb" aria-label="Permalink to &quot;`breadcrumb`&quot;">​</a></h3><p>是否展示面包屑 <code>breadcrumb</code>, 默认 <code>true</code></p><h3 id="gitchangelog" tabindex="-1"><code>gitChangelog</code> <a class="header-anchor" href="#gitchangelog" aria-label="Permalink to &quot;`gitChangelog`&quot;">​</a></h3><p>是否展示 <code>Contributors</code> 和 <code>Changelog</code>, 默认 <code>true</code></p><h3 id="heatmap" tabindex="-1"><code>heatmap</code> <a class="header-anchor" href="#heatmap" aria-label="Permalink to &quot;`heatmap`&quot;">​</a></h3><p>在 <code>layout: home</code> 页面是否展示文件提交历史 (基于 <code>git</code>) 热力图 <code>heatmap</code>, 默认 <code>true</code></p><p>取消展示 <code>heatmap</code>:</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">---</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> home</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">heatmap</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>源码 (<code>vitepress</code> 首页入口文件 <code>index.md</code>):</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">client-only</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> v-if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$frontmatter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">heatmap</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Heatmap</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">client-only</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="完整示例" tabindex="-1">完整示例 <a class="header-anchor" href="#完整示例" aria-label="Permalink to &quot;完整示例&quot;">​</a></h2><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">---</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">navbar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 默认值 true</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">sidebar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 默认值 true</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">aside</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 默认值 true</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">editLink</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 默认值 true</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">lastUpdated</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 默认值 true</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">footer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 默认值 true</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">breadcrumb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 默认值 true</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">gitChangelog</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 默认值 true</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">heatmap</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 默认值 true</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',26);function r(o,k,c,b,g,u){const i=a("NolebaseGitContributors"),e=a("NolebaseGitChangelog");return h(),t("div",null,[p,s(i),s(e)])}const f=n(d,[["render",r]]);export{y as __pageData,f as default};
