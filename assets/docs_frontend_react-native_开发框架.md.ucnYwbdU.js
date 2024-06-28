import{a3 as d,k,l as s,J as i,L as e,ax as n,ag as l,j as o,Z as t}from"./chunks/framework.CK7x57RQ.js";const w=JSON.parse('{"title":"React Native 开发框架","description":"","frontmatter":{"breadcrumb":true,"pageInfo":true,"heatmap":true,"copyright":true},"headers":[],"relativePath":"docs/frontend/react-native/开发框架.md","filePath":"docs/frontend/react-native/开发框架.md","lastUpdated":1719568930000}'),c={name:"docs/frontend/react-native/开发框架.md"},r=n('<h1 id="react-native-开发框架" tabindex="-1">React Native 开发框架 <a class="header-anchor" href="#react-native-开发框架" aria-label="Permalink to &quot;React Native 开发框架&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> react-native</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> doctor</span></span></code></pre></div><h2 id="react-native-community-cli" tabindex="-1">React Native Community CLI <a class="header-anchor" href="#react-native-community-cli" aria-label="Permalink to &quot;React Native Community CLI&quot;">​</a></h2>',3),g=n(`<h3 id="basic" tabindex="-1">Basic <a class="header-anchor" href="#basic" aria-label="Permalink to &quot;Basic&quot;">​</a></h3><p>创建新项目:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> react-native@latest</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">MyAp</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>默认使用 <code>npm</code> 安装依赖</li><li>不推荐使用 <code>pnpm</code> 安装和管理依赖, 会遗漏 <code>@react-native-community</code> 相关的子包: <ul><li><code>@react-native-community/cli</code></li><li><code>@react-native-community/cli-platform-android</code></li><li><code>@react-native-community/cli-platform-ios</code></li></ul></li></ul></div><p>开发调试:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 启动 metro 服务, 默认端口为 8081</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 清除缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --reset-cache</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>可在浏览器中输入 <code>localhost:8081</code> 以检查 <code>metro</code> 服务是否正常启动</li><li>更改端口: <code>npm start --port=1234</code></li><li><code>npm start</code> 终端中输入以下字符可执行相应命令: <ul><li><code>a</code> 运行到 <code>android</code></li><li><code>i</code> 运行到 <code>iOS</code></li><li><code>d</code> 打开调试</li><li><code>r</code> 重新加载 :::</li></ul></li></ul><p>使用 <code>CocoaPods</code> 安装 <code>iOS</code> 依赖:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ios</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pod</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span></span></code></pre></div><h3 id="真机上报错-could-not-connect-to-development-server" tabindex="-1">真机上报错 <code>Could not connect to development server</code> <a class="header-anchor" href="#真机上报错-could-not-connect-to-development-server" aria-label="Permalink to &quot;真机上报错 \`Could not connect to development server\`&quot;">​</a></h3><p>在电脑终端 (新终端, 非 <code>npm start</code> 终端) 中使用 <code>adb</code> 命令打开 <code>Dev Menu</code> (<code>React Native Dev Menu (Bridge)</code>):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">adb</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> shell</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> input</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> keyevent</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 82</span></span></code></pre></div><p>在 <code>Debugging</code> 下找到并点击 <code>Debug server host &amp; port for device</code>, 输入电脑 <code>ip</code> 和 <code>port</code>, 如 <code>10.66.62.166:8081</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>安卓真机也可摇晃设备以打开 <code>Dev Menu</code>, 如不成功则在电脑终端中输入 <code>adb shell input keyevent 82</code></li><li>Windows 在终端输入 <code>ipconfig</code> 查看 <code>ip</code></li><li><code>MacOS</code> 在终端输入 <code>ifconfig</code> 找到 <code>en0</code> 查看<code>ip</code> 或直接输入 <code>ifconfig en0</code></li><li><code>port</code> 即 <code>npm start</code> 对应的端口, 默认为 <code>8081</code></li></ul></div></div><h3 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h3><p>安卓打包:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> android</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">./gradlew</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> assembleRelease</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>./gradlew</code> 之前的 <code>./</code> 不可省略, 但在 <code>Windows CMD</code> 命令行下须去掉 <code>./</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># on windows cmd</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> android</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">gradlew</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> assembleRelease</span></span></code></pre></div></div><p>最终的安卓打包产物路径为 <code>android/app/build/outputs/apk/release/app-release.apk</code></p><h3 id="清除缓存" tabindex="-1">清除缓存 <a class="header-anchor" href="#清除缓存" aria-label="Permalink to &quot;清除缓存&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --rest-cache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 如果提示</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># error: unknown option &#39;--rest-cache&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># (Did you mean --resetCache?)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --resetCache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 或定义命令 &quot;start:clean&quot;: &quot;react-native start --resetCache&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start:clean</span></span></code></pre></div><h4 id="android" tabindex="-1"><code>android</code>: <a class="header-anchor" href="#android" aria-label="Permalink to &quot;\`android\`:&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> android</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">./gradlew</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clean</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># or on windows cmd</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># gradlew clean</span></span></code></pre></div><h3 id="web-支持" tabindex="-1"><code>Web</code> 支持 <a class="header-anchor" href="#web-支持" aria-label="Permalink to &quot;\`Web\` 支持&quot;">​</a></h3><p>使用 <code>React Native Community CLI</code> 创建的项目默认仅支持 <code>android</code> 和 <code>ios</code> 平台, 即根目录下存在 <code>android</code> 和 <code>ios</code> 文件夹</p><p>TODO 添加 <code>Web</code> 支持</p><h3 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h3><h4 id="chrome-devtools" tabindex="-1">Chrome DevTools <a class="header-anchor" href="#chrome-devtools" aria-label="Permalink to &quot;Chrome DevTools&quot;">​</a></h4><ul><li>浏览器内输入 <code>chrome://inspect</code></li><li>点击 <code>Configure</code> 按钮并输入 <code>Dev Server</code> 链接, 如 <code>localhost:8081</code></li><li>点击 <code>Remote Target</code> -&gt; <code>Hermes Bridgeless React Native</code> -&gt; <code>inspect</code> 即可弹出调试工具</li></ul><h4 id="react-devtools" tabindex="-1">react-devtools <a class="header-anchor" href="#react-devtools" aria-label="Permalink to &quot;react-devtools&quot;">​</a></h4>`,23),b=n('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> react-devtools</span></span></code></pre></div><p>全局安装 <code>react-devtools</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> react-devtools</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>react-devtools</code> 基于 <code>Electron</code> 构建, 因此会下载 <code>Electron</code> 相关依赖, 请确保网络代理工具正常, 下载过程会较为漫长, 务必等待安装完成</p></div><p>使用以下命令打开 <code>react-devtools</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> react-devtools</span></span></code></pre></div><p>会提示在模拟器上打开 <code>Dev Menu</code>, 随后可正常调试</p><h3 id="nativewind" tabindex="-1"><code>Nativewind</code> <a class="header-anchor" href="#nativewind" aria-label="Permalink to &quot;`Nativewind`&quot;">​</a></h3>',8),v=n(`<p>安装依赖:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nativewind</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --save-dev</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tailwindcss@3.3.2</span></span></code></pre></div><p>生成 <code>tailwind.consig.js</code> 文件:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tailwindcss</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span></span></code></pre></div><p><code>babel.config.js</code> 文件配置 <code>nativewind/babel</code> 插件:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// babel.config.js</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  presets</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">module:@react-native/babel-preset</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">nativewind/babel</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre></div><p>生成 <code>tailwind.output.css</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tailwind</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tailwind.output.css</span></span></code></pre></div><p>::: warn <code>NativeWind V4</code> 以下版本须锁死 <code>tailwind</code> 版本为 <code>3.3.2</code>, 否则会报错</p><p><code>package.json</code> 中配置 <code>tailwind</code> 版本 (去掉版本号前的任何修饰符, 如 <code>^</code>/<code>~</code>):</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">devDependencies</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">tailwindcss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">3.3.2</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>:::</p><h3 id="react-native-dotenv" tabindex="-1"><code>react-native-dotenv</code> <a class="header-anchor" href="#react-native-dotenv" aria-label="Permalink to &quot;\`react-native-dotenv\`&quot;">​</a></h3>`,13),y=n('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --save-dev</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> react-native-dotenv</span></span></code></pre></div><h3 id="router" tabindex="-1">Router <a class="header-anchor" href="#router" aria-label="Permalink to &quot;Router&quot;">​</a></h3>',2),u=n(`<h3 id="配置路径别名" tabindex="-1">配置路径别名 <a class="header-anchor" href="#配置路径别名" aria-label="Permalink to &quot;配置路径别名&quot;">​</a></h3><p>在 <code>tsconfig.json</code> 中配置 <code>compilerOptions.paths</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">extends</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@react-native/typescript-config/tsconfig.json</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">compilerOptions</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">strict</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">paths</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">@components/*</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./src/components/*</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">include</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">**/*.ts</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">**/*.tsx</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>同时须安装和配置相关插件, 否则 <code>babel</code>无法识别 (尽管<code>IDE</code> 可识别并可正常跳转):</p><ul><li><code>babel-plugin-module-resolver</code></li><li><code>babel-plugin-root-import</code></li></ul><h4 id="babel-plugin-module-resolver" tabindex="-1"><code>babel-plugin-module-resolver</code> <a class="header-anchor" href="#babel-plugin-module-resolver" aria-label="Permalink to &quot;\`babel-plugin-module-resolver\`&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --save-dev</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> babel-plugin-module-resolver</span></span></code></pre></div><h4 id="babel-plugin-root-import" tabindex="-1"><code>babel-plugin-root-import</code> <a class="header-anchor" href="#babel-plugin-root-import" aria-label="Permalink to &quot;\`babel-plugin-root-import\`&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --save-dev</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> babel-plugin-root-import</span></span></code></pre></div><h4 id="react-navigation" tabindex="-1"><code>React Navigation</code> <a class="header-anchor" href="#react-navigation" aria-label="Permalink to &quot;\`React Navigation\`&quot;">​</a></h4><p>安装依赖:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @react-navigation/native</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @react-navigation/native-stack</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># for bare react native project</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> react-native-screens</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> react-native-safe-area-context</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># for iOS</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ios</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pod</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ..</span></span></code></pre></div><p>使用 <code>NavigationContainer</code> 包裹入口:</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">NavigationContainer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@react-navigation/native</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span></code></pre></div><h4 id="expo-router" tabindex="-1">Expo Router <a class="header-anchor" href="#expo-router" aria-label="Permalink to &quot;Expo Router&quot;">​</a></h4><p><code>Expo Router</code> 构建于 <code>React Navigation</code> 之上, 提供更丰富、更易用的基于文件的路由导航功能 但仅可在 <code>Expo CLI</code> 项目中使用, 无法在纯 <code>React Native</code> 项目中使用</p><p>如须在纯 <code>React Native</code> 项目使用 <code>Expo Router</code>, 可安装 <code>Expo CLI</code></p><h3 id="async-storage" tabindex="-1"><code>Async Storage</code> <a class="header-anchor" href="#async-storage" aria-label="Permalink to &quot;\`Async Storage\`&quot;">​</a></h3>`,18),A=n('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @react-native-async-storage/async-storage</span></span></code></pre></div><h2 id="expo" tabindex="-1">Expo <a class="header-anchor" href="#expo" aria-label="Permalink to &quot;Expo&quot;">​</a></h2>',2),f=n('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create-expo-app@latest</span></span></code></pre></div><h2 id="ignite" tabindex="-1">Ignite <a class="header-anchor" href="#ignite" aria-label="Permalink to &quot;Ignite&quot;">​</a></h2>',2),C=n('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ignite-cli@latest</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> new</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">MyAp</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span></code></pre></div>',1);function m(D,_,B,x,q,T){const a=l("VPNolebaseInlineLinkPreview"),h=l("NolebaseGitContributors"),p=l("NolebaseGitChangelog");return o(),k("div",null,[r,s("ul",null,[s("li",null,[i(a,{href:"https://github.com/react-native-community/cli",target:"_blank",rel:"noreferrer"},{default:e(()=>[t("React Native Community CLI")]),_:1})])]),g,s("ul",null,[s("li",null,[i(a,{href:"https://www.npmjs.com/package/react-devtools",target:"_blank",rel:"noreferrer"},{default:e(()=>[t("react-devtools - npm")]),_:1})])]),b,s("ul",null,[s("li",null,[i(a,{href:"https://www.nativewind.dev/quick-starts/react-native-cli",target:"_blank",rel:"noreferrer"},{default:e(()=>[t("React Native CLI - Nativewind")]),_:1})])]),v,s("ul",null,[s("li",null,[i(a,{href:"https://github.com/goatandsheep/react-native-dotenv",target:"_blank",rel:"noreferrer"},{default:e(()=>[t("react-native-dotenv - GitHub")]),_:1})])]),y,s("ul",null,[s("li",null,[i(a,{href:"https://reactnavigation.org/",target:"_blank",rel:"noreferrer"},{default:e(()=>[t("React Navigation")]),_:1})]),s("li",null,[i(a,{href:"https://github.com/wix/react-native-navigation",target:"_blank",rel:"noreferrer"},{default:e(()=>[t("React Native Navigation")]),_:1})])]),u,s("ul",null,[s("li",null,[i(a,{href:"https://react-native-async-storage.github.io/async-storage/docs/install/",target:"_blank",rel:"noreferrer"},{default:e(()=>[t("Install - Async Storage")]),_:1})])]),A,s("ul",null,[s("li",null,[i(a,{href:"https://docs.expo.dev/",target:"_blank",rel:"noreferrer"},{default:e(()=>[t("Expo")]),_:1})])]),f,s("ul",null,[s("li",null,[i(a,{href:"https://github.com/infinitered/ignite/tree/master",target:"_blank",rel:"noreferrer"},{default:e(()=>[t("Ignite")]),_:1})])]),C,i(h),i(p)])}const N=d(c,[["render",m]]);export{w as __pageData,N as default};
