import{_ as s,c as i,o as a,a8 as n}from"./chunks/framework.ChBPuSq0.js";const g=JSON.parse('{"title":"UnoCSS ESLint Config","description":"ESLint config for UnoCSS (@unocss/eslint-config).","frontmatter":{"title":"UnoCSS ESLint Config","description":"ESLint config for UnoCSS (@unocss/eslint-config)."},"headers":[],"relativePath":"docs/frontend/vue/eslint.md","filePath":"docs/frontend/vue/eslint.md","lastUpdated":1716545597000}'),e={name:"docs/frontend/vue/eslint.md"},l=n(`<h1 id="eslint-config" tabindex="-1">ESLint Config <a class="header-anchor" href="#eslint-config" aria-label="Permalink to &quot;ESLint Config&quot;">​</a></h1><p>ESLint config for UnoCSS: <code>@unocss/eslint-config</code>.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-6zCAJ" id="tab-9gg71Si" checked><label for="tab-9gg71Si">pnpm</label><input type="radio" name="group-6zCAJ" id="tab-0A0gkUL"><label for="tab-0A0gkUL">yarn</label><input type="radio" name="group-6zCAJ" id="tab-yn1g6Iq"><label for="tab-yn1g6Iq">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/eslint-config</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/eslint-config</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/eslint-config</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p>In <a href="https://eslint.org/docs/latest/use/configure/configuration-files-new" target="_blank" rel="noreferrer">Flat Config Style</a>:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// eslint.config.js</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> unocss</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@unocss/eslint-config/flat</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  unocss</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // other configs</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>In legacy <code>.eslintrc</code> style:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">extends</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">    &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="rules" tabindex="-1">Rules <a class="header-anchor" href="#rules" aria-label="Permalink to &quot;Rules&quot;">​</a></h2><ul><li><code>@unocss/order</code> - Enforce a specific order for class selectors.</li><li><code>@unocss/order-attributify</code> - Enforce a specific order for attributify selectors.</li><li><code>@unocss/blocklist</code> - Disallow specific class selectors [Optional].</li><li><code>@unocss/enforce-class-compile</code> - Enforce class compile [Optional].</li></ul><h3 id="optional-rules" tabindex="-1">Optional rules <a class="header-anchor" href="#optional-rules" aria-label="Permalink to &quot;Optional rules&quot;">​</a></h3><p>These rules are not enabled by default. To enable it, add the following to your <code>.eslintrc</code>:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">extends</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">    &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">rules</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">@unocss/&lt;rule-name&gt;</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">warn</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // or &quot;error&quot;,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">@unocss/&lt;another-rule-name&gt;</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">warn</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> /* or &quot;error&quot; */</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> /* options */</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="unocss-blocklist" tabindex="-1"><code>@unocss/blocklist</code> <a class="header-anchor" href="#unocss-blocklist" aria-label="Permalink to &quot;\`@unocss/blocklist\`&quot;">​</a></h4><p>Throw warning or error when using utilities listed in <code>blocklist</code> get matched.</p><h4 id="unocss-enforce-class-compile" tabindex="-1"><code>@unocss/enforce-class-compile</code> 🔧 <a class="header-anchor" href="#unocss-enforce-class-compile" aria-label="Permalink to &quot;\`@unocss/enforce-class-compile\` :wrench:&quot;">​</a></h4><p><em>This rule is designed to work in combination with <a href="https://unocss.dev/transformers/compile-class" target="_blank" rel="noreferrer">compile class transformer</a>.</em></p><p>Throw warning or error when class attribute or directive doesn&#39;t start with <code>:uno:</code>.</p><p>🔧 automatically adds prefix <code>:uno:</code> to all class attributes and directives.</p><p>Options:</p><ul><li><code>prefix</code> (string) - can be used in combination with <a href="https://github.com/unocss/unocss/blob/main/packages/transformer-compile-class/src/index.ts#L34" target="_blank" rel="noreferrer">custom prefix</a>. Default: <code>:uno:</code></li><li><code>enableFix</code> (boolean) - can be used for gradual migration when <code>false</code>. Default: <code>true</code></li></ul><p><strong>Note</strong>: currently only Vue supported. <em>Contribute a PR</em> if you want this in JSX. If you&#39;re looking for this in Svelte, you might be looking for <a href="https://unocss.dev/integrations/svelte-scoped" target="_blank" rel="noreferrer"><code>svelte-scoped</code></a> mode.</p><h2 id="prior-arts" tabindex="-1">Prior Arts <a class="header-anchor" href="#prior-arts" aria-label="Permalink to &quot;Prior Arts&quot;">​</a></h2><p>Thanks to <a href="https://github.com/devunt/eslint-plugin-unocss" target="_blank" rel="noreferrer">eslint-plugin-unocss</a> by <a href="https://github.com/devunt" target="_blank" rel="noreferrer">@devunt</a>.</p>`,24),t=[l];function r(p,h,o,d,k,c){return a(),i("div",null,t)}const b=s(e,[["render",r]]);export{g as __pageData,b as default};
