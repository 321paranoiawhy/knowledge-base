import{_ as o,i as p,A as e,N as s,p as n,l as a,ab as t,J as i,h as d}from"./chunks/framework.VXGdQafs.js";const oe=JSON.parse('{"title":"","description":"","frontmatter":{"breadcrumb":true,"pageInfo":true,"heatmap":true,"copyright":true},"headers":[],"relativePath":"docs/frontend/react-native/调研.md","filePath":"docs/frontend/react-native/调研.md","lastUpdated":1717830269000}'),c={name:"docs/frontend/react-native/调研.md"},u=e("p",null,"须适配以下功能:",-1),k=e("ul",null,[e("li",null,"蓝牙, 包括连接蓝牙, 发送指令打印"),e("li",null,"串口通信"),e("li",null,"摄像头, 包括拍照和上传本地照片"),e("li",null,"二维码, 最好能支持连续扫描二维码")],-1),b=e("p",null,"如插件市场无法满足某一功能的插件, 尚须考虑自行开发原生插件难度和接入难度",-1),_=e("h2",{id:"react-native",tabindex:"-1"},[a("React Native "),e("a",{class:"header-anchor",href:"#react-native","aria-label":'Permalink to "React Native"'},"​")],-1),f=t('<h3 id="开发语言" tabindex="-1">开发语言 <a class="header-anchor" href="#开发语言" aria-label="Permalink to &quot;开发语言&quot;">​</a></h3><p>开发语言为 <code>JavaScript</code> 和 <code>TypeScript</code>, 主要文件类型为 <code>jsx</code> 或 <code>tsx</code>, 基于 <code>React</code> 框架和 <code>Expo</code> 上层框架</p><h3 id="开发体验" tabindex="-1">开发体验 <a class="header-anchor" href="#开发体验" aria-label="Permalink to &quot;开发体验&quot;">​</a></h3><p>基于 <code>babel</code>, 是否可使用 <code>Vite</code> 替代</p><h3 id="插件市场" tabindex="-1">插件市场 <a class="header-anchor" href="#插件市场" aria-label="Permalink to &quot;插件市场&quot;">​</a></h3>',5),g=t('<h3 id="生态" tabindex="-1">生态 <a class="header-anchor" href="#生态" aria-label="Permalink to &quot;生态&quot;">​</a></h3><h3 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h3><h4 id="打开相机" tabindex="-1">打开相机 <a class="header-anchor" href="#打开相机" aria-label="Permalink to &quot;打开相机&quot;">​</a></h4>',3),m=e("h4",{id:"选择本地图片或拍照",tabindex:"-1"},[a("选择本地图片或拍照 "),e("a",{class:"header-anchor",href:"#选择本地图片或拍照","aria-label":'Permalink to "选择本地图片或拍照"'},"​")],-1),v=e("h4",{id:"图片相关",tabindex:"-1"},[a("图片相关 "),e("a",{class:"header-anchor",href:"#图片相关","aria-label":'Permalink to "图片相关"'},"​")],-1),A=e("p",null,"选择本地图片或拍照",-1),y=e("p",null,"用于渲染图片的组件",-1),x=e("p",null,"可编辑、压缩图片",-1),D=e("p",null,"图片压缩",-1),P=e("h4",{id:"扫描二维码",tabindex:"-1"},[a("扫描二维码 "),e("a",{class:"header-anchor",href:"#扫描二维码","aria-label":'Permalink to "扫描二维码"'},"​")],-1),C=e("h4",{id:"串口通信",tabindex:"-1"},[a("串口通信 "),e("a",{class:"header-anchor",href:"#串口通信","aria-label":'Permalink to "串口通信"'},"​")],-1),B=e("h4",{id:"蓝牙和打印",tabindex:"-1"},[a("蓝牙和打印 "),e("a",{class:"header-anchor",href:"#蓝牙和打印","aria-label":'Permalink to "蓝牙和打印"'},"​")],-1),q=t(`<div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">import</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> BleManager</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">react-native-ble-manager</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># https://innoveit.github.io/react-native-ble-manager/methods/#enablebluetooth-android-only</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">BleManager.enableBluetooth</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># deviceId example</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># https://innoveit.github.io/react-native-ble-manager/methods/#connectperipheralid-options</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">BleManager.connect(deviceId,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> options</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># https://innoveit.github.io/react-native-ble-manager/methods/#disconnectperipheralid-force</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">BleManager.disconnect(deviceId,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> force</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># https://innoveit.github.io/react-native-ble-manager/methods/#readperipheralid-serviceuuid-characteristicuuid</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">BleManager.read(peripheralId,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> serviceUUID,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> characteristicUUID</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># https://innoveit.github.io/react-native-ble-manager/methods/#writeperipheralid-serviceuuid-characteristicuuid-data-maxbytesize</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">BleManager.write(peripheralId,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> serviceUUID,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> characteristicUUID,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> data,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> maxByteSize</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="获取地理位置" tabindex="-1">获取地理位置 <a class="header-anchor" href="#获取地理位置" aria-label="Permalink to &quot;获取地理位置&quot;">​</a></h4>`,2),T=e("h4",{id:"sqlite",tabindex:"-1"},[a("SQLite "),e("a",{class:"header-anchor",href:"#sqlite","aria-label":'Permalink to "SQLite"'},"​")],-1),w=e("h4",{id:"网络连接",tabindex:"-1"},[a("网络连接 "),e("a",{class:"header-anchor",href:"#网络连接","aria-label":'Permalink to "网络连接"'},"​")],-1),X=e("h4",{id:"嵌入-web-网页",tabindex:"-1"},[a("嵌入 "),e("code",null,"Web"),a(" 网页 "),e("a",{class:"header-anchor",href:"#嵌入-web-网页","aria-label":'Permalink to "嵌入 `Web` 网页"'},"​")],-1),S=e("h4",{id:"热更新",tabindex:"-1"},[a("热更新 "),e("a",{class:"header-anchor",href:"#热更新","aria-label":'Permalink to "热更新"'},"​")],-1),I=e("h4",{id:"组件库",tabindex:"-1"},[a("组件库 "),e("a",{class:"header-anchor",href:"#组件库","aria-label":'Permalink to "组件库"'},"​")],-1),E=e("h4",{id:"通用包",tabindex:"-1"},[a("通用包 "),e("a",{class:"header-anchor",href:"#通用包","aria-label":'Permalink to "通用包"'},"​")],-1),N=e("li",null,[e("p",null,[e("a",{href:"./"},"axios")]),e("p",null,"用于发起请求")],-1),V=e("p",null,"通用的请求库, 请求缓存, 重新请求, 请求失败重试等",-1),R=e("p",null,[e("code",null,"JS"),a(" 接口模拟工具")],-1),U=e("p",null,[e("code",null,"React"),a(" 状态管理工具")],-1),L=e("p",null,"不可变状态管理",-1),J=e("p",null,"Data storage system for React Native.",-1),M=t(`<div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> axios</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @tanstack/react-query</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> msw</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zustand</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> immer</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @react-native-async-storage/async-storage</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="flutter" tabindex="-1">Flutter <a class="header-anchor" href="#flutter" aria-label="Permalink to &quot;Flutter&quot;">​</a></h2><ul><li><code>Debug</code> 下为 <code>JIT (Just in Time)</code> 即时编译</li><li><code>Release</code> 下为 <code>AOT (Ahead of Time)</code>预编译</li></ul><h3 id="开发语言-1" tabindex="-1">开发语言 <a class="header-anchor" href="#开发语言-1" aria-label="Permalink to &quot;开发语言&quot;">​</a></h3><p>开发语言为 <code>Dart</code></p><ul><li>强类型语言，声明变量须同时声明其类型, 变量类型不可变, 类型不一致时会报错</li><li>布局为类 <code>xml</code> 的嵌套写法</li></ul><h3 id="开发体验-1" tabindex="-1">开发体验 <a class="header-anchor" href="#开发体验-1" aria-label="Permalink to &quot;开发体验&quot;">​</a></h3><h3 id="插件市场-1" tabindex="-1">插件市场 <a class="header-anchor" href="#插件市场-1" aria-label="Permalink to &quot;插件市场&quot;">​</a></h3>`,8),W=t('<h3 id="生态-1" tabindex="-1">生态 <a class="header-anchor" href="#生态-1" aria-label="Permalink to &quot;生态&quot;">​</a></h3><h3 id="功能-1" tabindex="-1">功能 <a class="header-anchor" href="#功能-1" aria-label="Permalink to &quot;功能&quot;">​</a></h3><h4 id="组件库-1" tabindex="-1">组件库 <a class="header-anchor" href="#组件库-1" aria-label="Permalink to &quot;组件库&quot;">​</a></h4><h4 id="打开相机-1" tabindex="-1">打开相机 <a class="header-anchor" href="#打开相机-1" aria-label="Permalink to &quot;打开相机&quot;">​</a></h4>',4),z=e("h4",{id:"选择本地图片或拍照-1",tabindex:"-1"},[a("选择本地图片或拍照 "),e("a",{class:"header-anchor",href:"#选择本地图片或拍照-1","aria-label":'Permalink to "选择本地图片或拍照"'},"​")],-1),F=e("p",null,"基于 微信 UI 的 Flutter 图片选择器（同时支持视频和音频）",-1),Q=e("h4",{id:"图片压缩",tabindex:"-1"},[a("图片压缩 "),e("a",{class:"header-anchor",href:"#图片压缩","aria-label":'Permalink to "图片压缩"'},"​")],-1),j=e("h4",{id:"扫描二维码-1",tabindex:"-1"},[a("扫描二维码 "),e("a",{class:"header-anchor",href:"#扫描二维码-1","aria-label":'Permalink to "扫描二维码"'},"​")],-1),G=e("h4",{id:"串口通信-1",tabindex:"-1"},[a("串口通信 "),e("a",{class:"header-anchor",href:"#串口通信-1","aria-label":'Permalink to "串口通信"'},"​")],-1),$=e("h4",{id:"获取地理位置-1",tabindex:"-1"},[a("获取地理位置 "),e("a",{class:"header-anchor",href:"#获取地理位置-1","aria-label":'Permalink to "获取地理位置"'},"​")],-1),O=e("h4",{id:"sqlite-1",tabindex:"-1"},[a("SQLite "),e("a",{class:"header-anchor",href:"#sqlite-1","aria-label":'Permalink to "SQLite"'},"​")],-1),H=e("h4",{id:"网络连接-1",tabindex:"-1"},[a("网络连接 "),e("a",{class:"header-anchor",href:"#网络连接-1","aria-label":'Permalink to "网络连接"'},"​")],-1),Y=e("h4",{id:"嵌入-web-网页-1",tabindex:"-1"},[a("嵌入 "),e("code",null,"Web"),a(" 网页 "),e("a",{class:"header-anchor",href:"#嵌入-web-网页-1","aria-label":'Permalink to "嵌入 `Web` 网页"'},"​")],-1),K=e("h4",{id:"热更新-1",tabindex:"-1"},[a("热更新 "),e("a",{class:"header-anchor",href:"#热更新-1","aria-label":'Permalink to "热更新"'},"​")],-1),Z=e("code",null,"Flutter",-1),ee=e("strong",null,"热更新",-1);function ae(se,le,ne,te,ie,re){const l=i("VPNolebaseInlineLinkPreview"),r=i("NolebaseGitContributors"),h=i("NolebaseGitChangelog");return d(),p("div",null,[u,k,b,_,e("ul",null,[e("li",null,[s(l,{href:"https://react.dev/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("react.dev")]),_:1})]),e("li",null,[s(l,{href:"https://reactnative.dev/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("reactnative.dev")]),_:1})])]),f,e("ul",null,[e("li",null,[s(l,{href:"https://reactnative.directory/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("React Native Directory")]),_:1})])]),g,e("ul",null,[e("li",null,[s(l,{href:"https://docs.expo.dev/versions/latest/sdk/camera/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Expo Camera")]),_:1})])]),m,v,e("ul",null,[e("li",null,[e("p",null,[s(l,{href:"https://docs.expo.dev/versions/latest/sdk/imagepicker/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Expo ImagePicker")]),_:1})]),A]),e("li",null,[e("p",null,[s(l,{href:"https://docs.expo.dev/versions/latest/sdk/image/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Expo Image")]),_:1})]),y]),e("li",null,[e("p",null,[s(l,{href:"https://github.com/ivpusic/react-native-image-crop-picker",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("react-native-image-crop-picker")]),_:1})]),x]),e("li",null,[e("p",null,[s(l,{href:"https://www.npmjs.com/package/react-native-compressor",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("react-native-compressor")]),_:1})]),D])]),P,e("ul",null,[e("li",null,[s(l,{href:"https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Expo BarCodeScanner")]),_:1})])]),C,e("ul",null,[e("li",null,[s(l,{href:"https://labrador.ink/index.php/posts/214",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("ReactNative 实现 Android 串口通信")]),_:1})])]),B,e("ul",null,[e("li",null,[s(l,{href:"https://github.com/innoveit/react-native-ble-manager",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("react-native-ble-manager")]),_:1})]),e("li",null,[s(l,{href:"https://github.com/dotintent/react-native-ble-plx",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("react-native-ble-plx")]),_:1})]),e("li",null,[s(l,{href:"https://docs.expo.dev/versions/latest/sdk/print/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Expo Print")]),_:1})])]),q,e("ul",null,[e("li",null,[s(l,{href:"https://docs.expo.dev/versions/latest/sdk/location/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Expo Location")]),_:1})])]),T,e("ul",null,[e("li",null,[s(l,{href:"https://docs.expo.dev/versions/latest/sdk/sqlite/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Expo SQLite")]),_:1})])]),w,e("ul",null,[e("li",null,[s(l,{href:"https://docs.expo.dev/versions/latest/sdk/netinfo/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("NetInfo")]),_:1})]),e("li",null,[s(l,{href:"https://docs.expo.dev/versions/latest/sdk/network/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Expo Network")]),_:1})])]),X,e("ul",null,[e("li",null,[s(l,{href:"https://docs.expo.dev/versions/latest/sdk/webview/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("WebView")]),_:1})])]),S,e("ul",null,[e("li",null,[s(l,{href:"https://pushy.reactnative.cn/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("PUSHY")]),_:1})])]),I,e("ul",null,[e("li",null,[s(l,{href:"https://docs.expo.dev/ui-programming/user-interface-libraries/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("User Interface component libraries - Expo")]),_:1})])]),E,e("ul",null,[N,e("li",null,[e("p",null,[s(l,{href:"https://tanstack.com/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("TanStack react-query")]),_:1})]),V]),e("li",null,[e("p",null,[s(l,{href:"https://mswjs.io/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("msw")]),_:1})]),R]),e("li",null,[e("p",null,[s(l,{href:"https://docs.pmnd.rs/zustand/getting-started/introduction",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("zustand")]),_:1})]),U]),e("li",null,[e("p",null,[s(l,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("immer")]),_:1})]),L]),e("li",null,[e("p",null,[s(l,{href:"https://react-native-async-storage.github.io/async-storage/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("@react-native-async-storage/async-storage")]),_:1})]),J])]),M,e("ul",null,[e("li",null,[s(l,{href:"https://pub.dev/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("pub.dev")]),_:1}),a(" 官方插件市场")]),e("li",null,[s(l,{href:"https://pub-web.flutter-io.cn/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("pub-web.flutter-io.cn")]),_:1}),a(" 插件市场中文站点")])]),W,e("ul",null,[e("li",null,[s(l,{href:"https://pub.dev/packages/camera",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("camera")]),_:1})])]),z,e("ul",null,[e("li",null,[e("p",null,[s(l,{href:"https://pub.dev/packages/image_picker",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("image_picker")]),_:1})])]),e("li",null,[e("p",null,[s(l,{href:"https://pub.dev/packages/wechat_assets_picker",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("wechat_assets_picker")]),_:1})]),F])]),Q,e("ul",null,[e("li",null,[s(l,{href:"https://pub.dev/packages/flutter_image_compress",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("flutter_image_compress")]),_:1})])]),j,e("ul",null,[e("li",null,[s(l,{href:"https://pub.dev/packages/mobile_scanner",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("mobile_scanner")]),_:1})]),e("li",null,[s(l,{href:"https://pub.dev/packages/flutter_barcode_scanner",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("flutter_barcode_scanner")]),_:1})])]),G,$,e("ul",null,[e("li",null,[s(l,{href:"https://pub.dev/packages/location",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("location")]),_:1})]),e("li",null,[s(l,{href:"https://docs.page/Lyokone/flutterlocation",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("package:location docs")]),_:1})])]),O,e("ul",null,[e("li",null,[s(l,{href:"https://pub.dev/packages/sqflite",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("sqflite")]),_:1})])]),H,e("ul",null,[e("li",null,[s(l,{href:"https://pub.dev/packages/connectivity_plus",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("connectivity_plus")]),_:1})])]),Y,e("ul",null,[e("li",null,[s(l,{href:"https://pub.dev/packages/webview_flutter",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("webview_flutter")]),_:1})]),e("li",null,[s(l,{href:"https://pub.dev/packages/flutter_inappwebview",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("flutter_inappwebview")]),_:1})])]),K,e("p",null,[a("基于性能、安全和跨端实现难度的考虑, "),Z,a(" 官方仍未将"),ee,a("功能列入"),s(l,{href:"https://github.com/flutter/flutter/blob/master/docs/roadmap/Roadmap.md#non-goals",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("规划")]),_:1}),a("之中, 但社区已有一些热更新实现:")]),e("ul",null,[e("li",null,[s(l,{href:"https://github.com/shorebirdtech/shorebird",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("shorebird")]),_:1})]),e("li",null,[s(l,{href:"https://pub.dev/packages/rfw",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Remote Flutter Widgets")]),_:1}),a(" 基于服务端的远程组件, 组件代码由服务端动态下发")])]),s(r),s(h)])}const pe=o(c,[["render",ae]]);export{oe as __pageData,pe as default};
