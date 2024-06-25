import{a3 as d,k as c,l as e,J as l,L as r,Z as t,ax as n,ag as i,j as h}from"./chunks/framework.CK7x57RQ.js";const me=JSON.parse('{"title":"React Native VS Flutter","description":"","frontmatter":{"breadcrumb":true,"pageInfo":true,"heatmap":true,"copyright":true},"headers":[],"relativePath":"docs/frontend/react-native/调研.md","filePath":"docs/frontend/react-native/调研.md","lastUpdated":1719307843000}'),_={name:"docs/frontend/react-native/调研.md"},u=n('<h1 id="react-native-vs-flutter" tabindex="-1"><code>React Native</code> VS <code>Flutter</code> <a class="header-anchor" href="#react-native-vs-flutter" aria-label="Permalink to &quot;`React Native` VS `Flutter`&quot;">​</a></h1><p>框架层面须支持/适配以下功能:</p><ul><li>蓝牙, 包括搜索、连接蓝牙, 发送蓝牙指令打印</li><li>串口通信</li><li>摄像头, 包括拍照和上传本地照片</li><li>二维码, 最好能支持连续扫描二维码</li></ul><p>如插件市场无法满足某一功能的插件, 尚须考虑原生插件<strong>开发</strong>和<strong>接入</strong>难度</p><h2 id="简表" tabindex="-1">简表 <a class="header-anchor" href="#简表" aria-label="Permalink to &quot;简表&quot;">​</a></h2><h2 id="react-native" tabindex="-1"><code>React Native</code> <a class="header-anchor" href="#react-native" aria-label="Permalink to &quot;`React Native`&quot;">​</a></h2>',6),p=e("h3",{id:"特性",tabindex:"-1"},[t("特性 "),e("a",{class:"header-anchor",href:"#特性","aria-label":'Permalink to "特性"'},"​")],-1),f=n('<li><p>开发语言为 <code>JavaScript</code> 和 <code>TypeScript</code></p></li><li><p>主要文件类型为 <code>jsx</code> 或 <code>tsx</code></p></li><li><p>基于 <code>React</code> 前端框架和 <code>Expo</code> 上层框架, 遵循 <code>UI = f(state)</code> 范式和函数式编程范式</p></li><li><p>基于 <code>babel</code> 构建工具, 可使用 <code>VS Code</code> 或 <code>Web Storm</code> 开发</p></li><li><p>开发时支持热更新, 更新效率较高, 启动速度较慢</p></li><li><p>可借助 <code>Expo Go</code> 在真机上调试</p></li><li><p>须使用 <code>React Native</code> 暴露出的组件:</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> View</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">react-native</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span></code></pre></div><p>类似 <code>uniapp</code> 的 <code>text</code>、<code>view</code> 等标签, 不同的是 <code>uniapp</code> 会将 <code>html</code> 标签转换为 <code>uniapp</code> 标签, 但 <code>RN</code> 则不会</p></li>',7),b=n("<li><p>使用 <code>Javascript Bridge</code>, 导致效率和性能较低, 尽管最新版本 <code>0.74</code> 在推进 <code>bridgeless</code> 新架构, 但其性能仍不如 <code>Flutter</code></p></li><li><p><code>JS</code> 生态丰富, 社区有很多 <code>npm</code> 包可供使用, 但其兼容性需要实践才能确定</p></li><li><p>前端人员上手成本低, 可快速上手</p></li><li><p>由于 <code>React</code> 自身特点, 不熟悉 <code>React</code> 的人虽然能写出满足需求的代码, 但代码质量和性能可能有问题, 须做相应的约束和培训</p></li><li><p>使用过多第三方包或官方更新可能会导致<strong>破坏式更新</strong>, 产品稳定性欠缺</p></li>",5),k=e("p",null,[e("s",null,[t("可尝试集成 "),e("code",null,"vite"),t(" 进行开发以提高开发效率")])],-1),g=e("h3",{id:"插件市场",tabindex:"-1"},[t("插件市场 "),e("a",{class:"header-anchor",href:"#插件市场","aria-label":'Permalink to "插件市场"'},"​")],-1),m=e("h3",{id:"功能",tabindex:"-1"},[t("功能 "),e("a",{class:"header-anchor",href:"#功能","aria-label":'Permalink to "功能"'},"​")],-1),v=e("h4",{id:"打开相机",tabindex:"-1"},[t("打开相机 "),e("a",{class:"header-anchor",href:"#打开相机","aria-label":'Permalink to "打开相机"'},"​")],-1),x=e("h4",{id:"选择本地图片或拍照",tabindex:"-1"},[t("选择本地图片或拍照 "),e("a",{class:"header-anchor",href:"#选择本地图片或拍照","aria-label":'Permalink to "选择本地图片或拍照"'},"​")],-1),P=e("h4",{id:"图片相关",tabindex:"-1"},[t("图片相关 "),e("a",{class:"header-anchor",href:"#图片相关","aria-label":'Permalink to "图片相关"'},"​")],-1),S=e("p",null,"选择本地图片或拍照",-1),T=e("p",null,"用于渲染图片的组件",-1),w=e("p",null,"可编辑、压缩图片",-1),y=e("p",null,"图片压缩",-1),N=e("h4",{id:"扫描二维码",tabindex:"-1"},[t("扫描二维码 "),e("a",{class:"header-anchor",href:"#扫描二维码","aria-label":'Permalink to "扫描二维码"'},"​")],-1),C=e("h4",{id:"串口通信",tabindex:"-1"},[t("串口通信 "),e("a",{class:"header-anchor",href:"#串口通信","aria-label":'Permalink to "串口通信"'},"​")],-1),A=e("h4",{id:"蓝牙和打印",tabindex:"-1"},[t("蓝牙和打印 "),e("a",{class:"header-anchor",href:"#蓝牙和打印","aria-label":'Permalink to "蓝牙和打印"'},"​")],-1),I=e("h4",{id:"获取地理位置",tabindex:"-1"},[t("获取地理位置 "),e("a",{class:"header-anchor",href:"#获取地理位置","aria-label":'Permalink to "获取地理位置"'},"​")],-1),R=e("h4",{id:"sqlite",tabindex:"-1"},[t("SQLite "),e("a",{class:"header-anchor",href:"#sqlite","aria-label":'Permalink to "SQLite"'},"​")],-1),V=e("h4",{id:"网络连接",tabindex:"-1"},[t("网络连接 "),e("a",{class:"header-anchor",href:"#网络连接","aria-label":'Permalink to "网络连接"'},"​")],-1),D=e("h4",{id:"嵌入-web-网页",tabindex:"-1"},[t("嵌入 "),e("code",null,"Web"),t(" 网页 "),e("a",{class:"header-anchor",href:"#嵌入-web-网页","aria-label":'Permalink to "嵌入 `Web` 网页"'},"​")],-1),E=e("h4",{id:"热更新",tabindex:"-1"},[t("热更新 "),e("a",{class:"header-anchor",href:"#热更新","aria-label":'Permalink to "热更新"'},"​")],-1),q=e("h4",{id:"组件库",tabindex:"-1"},[t("组件库 "),e("a",{class:"header-anchor",href:"#组件库","aria-label":'Permalink to "组件库"'},"​")],-1),F=e("h4",{id:"通用包",tabindex:"-1"},[t("通用包 "),e("a",{class:"header-anchor",href:"#通用包","aria-label":'Permalink to "通用包"'},"​")],-1),B=e("li",null,[e("p",null,[e("a",{href:"./"},"axios")]),e("p",null,"用于发起请求")],-1),L=e("p",null,"通用的请求库, 请求缓存, 重新请求, 请求失败重试等",-1),J=e("p",null,[e("code",null,"JS"),t(" 接口模拟工具")],-1),U=e("p",null,[e("code",null,"React"),t(" 状态管理工具")],-1),W=e("p",null,"不可变状态管理",-1),j=e("p",null,"Data storage system for React Native.",-1),G=e("h2",{id:"flutter",tabindex:"-1"},[e("code",null,"Flutter"),t(),e("a",{class:"header-anchor",href:"#flutter","aria-label":'Permalink to "`Flutter`"'},"​")],-1),Q=e("h3",{id:"特性-1",tabindex:"-1"},[t("特性 "),e("a",{class:"header-anchor",href:"#特性-1","aria-label":'Permalink to "特性"'},"​")],-1),$=n("<li>声明式 <code>UI</code> 框架, 使用 <code>setState</code> 更新 (无状态管理插件时)</li><li><code>Debug</code> 下为 <code>JIT (Just in Time)</code> 即时编译; <code>Release</code> 下为 <code>AOT (Ahead of Time)</code> 预编译</li><li>开发语言 <code>Dart</code>, 为强类型语言, 声明变量须同时声明其类型, 变量类型不可变, 类型不一致时会报错</li><li>开发时支持热更新, 热更新效率高</li><li>底层基于 <code>c++</code> 编写的 <code>skia</code> 图形库, 跨平台兼容性好, 性能较高 (低于原生开发)</li><li>可使用 <code>VS Code</code> 或 <code>Android Studio</code> 开发和调试, 支持有线和无线真机调试, 自带 <code>devtools</code></li><li>布局为类 <code>xml</code> 的嵌套写法, 会出现较多成对的 <code>()</code>, 且布局和样式位于同一文件</li>",7),O=n("<li>自带众多组件, 覆盖绝大部分场景, 仅须使用少量第三方 <code>UI</code> 插件</li><li>不支持热更新, 社区有 <code>shorebird</code> 方案</li><li>前端人员上手成本较高, 须熟悉 <code>Dart</code> 语言和 <code>Flutter</code> 布局写法、状态更新等</li><li><strong>破坏性更新</strong>较少, 如锁死 <code>SDK</code> 版本则可一直开发迭代</li>",4),z=e("h3",{id:"插件市场-1",tabindex:"-1"},[t("插件市场 "),e("a",{class:"header-anchor",href:"#插件市场-1","aria-label":'Permalink to "插件市场"'},"​")],-1),H=e("h3",{id:"功能-1",tabindex:"-1"},[t("功能 "),e("a",{class:"header-anchor",href:"#功能-1","aria-label":'Permalink to "功能"'},"​")],-1),K=e("h4",{id:"组件库-1",tabindex:"-1"},[t("组件库 "),e("a",{class:"header-anchor",href:"#组件库-1","aria-label":'Permalink to "组件库"'},"​")],-1),Y=e("li",null,[e("code",null,"Flutter"),t(" 自带多种组件, 已基本涵盖常用组件, 且提供 "),e("code",null,"Android (material)"),t(" 和 "),e("code",null,"iOS (cupertino)"),t(" 两种风格组件, 绝大部分情况下无须第三方组件库")],-1),Z=e("code",null,"UI",-1),M=e("h4",{id:"打开相机-1",tabindex:"-1"},[t("打开相机 "),e("a",{class:"header-anchor",href:"#打开相机-1","aria-label":'Permalink to "打开相机"'},"​")],-1),X=e("h4",{id:"选择本地图片或拍照-1",tabindex:"-1"},[t("选择本地图片或拍照 "),e("a",{class:"header-anchor",href:"#选择本地图片或拍照-1","aria-label":'Permalink to "选择本地图片或拍照"'},"​")],-1),ee=e("p",null,"基于 微信 UI 的 Flutter 图片选择器（同时支持视频和音频）",-1),te=e("h4",{id:"图片压缩",tabindex:"-1"},[t("图片压缩 "),e("a",{class:"header-anchor",href:"#图片压缩","aria-label":'Permalink to "图片压缩"'},"​")],-1),le=e("h4",{id:"扫描二维码-1",tabindex:"-1"},[t("扫描二维码 "),e("a",{class:"header-anchor",href:"#扫描二维码-1","aria-label":'Permalink to "扫描二维码"'},"​")],-1),ae=e("h4",{id:"串口通信-1",tabindex:"-1"},[t("串口通信 "),e("a",{class:"header-anchor",href:"#串口通信-1","aria-label":'Permalink to "串口通信"'},"​")],-1),re=e("h4",{id:"获取地理位置-1",tabindex:"-1"},[t("获取地理位置 "),e("a",{class:"header-anchor",href:"#获取地理位置-1","aria-label":'Permalink to "获取地理位置"'},"​")],-1),ne=e("h4",{id:"sqlite-1",tabindex:"-1"},[t("SQLite "),e("a",{class:"header-anchor",href:"#sqlite-1","aria-label":'Permalink to "SQLite"'},"​")],-1),ie=e("h4",{id:"网络连接-1",tabindex:"-1"},[t("网络连接 "),e("a",{class:"header-anchor",href:"#网络连接-1","aria-label":'Permalink to "网络连接"'},"​")],-1),oe=e("h4",{id:"嵌入-web-网页-1",tabindex:"-1"},[t("嵌入 "),e("code",null,"Web"),t(" 网页 "),e("a",{class:"header-anchor",href:"#嵌入-web-网页-1","aria-label":'Permalink to "嵌入 `Web` 网页"'},"​")],-1),se=e("h4",{id:"热更新-1",tabindex:"-1"},[t("热更新 "),e("a",{class:"header-anchor",href:"#热更新-1","aria-label":'Permalink to "热更新"'},"​")],-1),de=e("code",null,"Flutter",-1),ce=e("strong",null,"热更新",-1);function he(_e,ue,pe,fe,be,ke){const a=i("VPNolebaseInlineLinkPreview"),o=i("NolebaseGitContributors"),s=i("NolebaseGitChangelog");return h(),c("div",null,[u,e("ul",null,[e("li",null,[l(a,{href:"https://react.dev/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("react.dev")]),_:1})]),e("li",null,[l(a,{href:"https://reactnative.dev/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("reactnative.dev")]),_:1})]),e("li",null,[l(a,{href:"https://github.com/jhen0409/react-native-debugger",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("react-native-debugger")]),_:1})])]),p,e("ul",null,[f,e("li",null,[e("p",null,[t("文档和示例较为欠缺, 须借助搜索引擎查找和解决问题, "),l(a,{href:"https://reactnative.cn/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("中文文档")]),_:1})])]),b]),k,g,e("ul",null,[e("li",null,[l(a,{href:"https://reactnative.directory/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("React Native Directory")]),_:1})]),e("li",null,[l(a,{href:"https://github.com/react-native-community",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("React Native Community")]),_:1})])]),m,v,e("ul",null,[e("li",null,[l(a,{href:"https://docs.expo.dev/versions/latest/sdk/camera/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("Expo Camera")]),_:1})])]),x,P,e("ul",null,[e("li",null,[e("p",null,[l(a,{href:"https://docs.expo.dev/versions/latest/sdk/imagepicker/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("Expo ImagePicker")]),_:1})]),S]),e("li",null,[e("p",null,[l(a,{href:"https://docs.expo.dev/versions/latest/sdk/image/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("Expo Image")]),_:1})]),T]),e("li",null,[e("p",null,[l(a,{href:"https://github.com/ivpusic/react-native-image-crop-picker",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("react-native-image-crop-picker")]),_:1})]),w]),e("li",null,[e("p",null,[l(a,{href:"https://www.npmjs.com/package/react-native-compressor",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("react-native-compressor")]),_:1})]),y])]),N,e("ul",null,[e("li",null,[l(a,{href:"https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("Expo BarCodeScanner")]),_:1})])]),C,e("ul",null,[e("li",null,[l(a,{href:"https://labrador.ink/index.php/posts/214",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("ReactNative 实现 Android 串口通信")]),_:1})])]),A,e("ul",null,[e("li",null,[l(a,{href:"https://github.com/innoveit/react-native-ble-manager",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("react-native-ble-manager")]),_:1})]),e("li",null,[l(a,{href:"https://github.com/dotintent/react-native-ble-plx",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("react-native-ble-plx")]),_:1})]),e("li",null,[l(a,{href:"https://docs.expo.dev/versions/latest/sdk/print/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("Expo Print")]),_:1})])]),I,e("ul",null,[e("li",null,[l(a,{href:"https://docs.expo.dev/versions/latest/sdk/location/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("Expo Location")]),_:1})])]),R,e("ul",null,[e("li",null,[l(a,{href:"https://docs.expo.dev/versions/latest/sdk/sqlite/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("Expo SQLite")]),_:1})])]),V,e("ul",null,[e("li",null,[l(a,{href:"https://docs.expo.dev/versions/latest/sdk/netinfo/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("NetInfo")]),_:1})]),e("li",null,[l(a,{href:"https://docs.expo.dev/versions/latest/sdk/network/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("Expo Network")]),_:1})])]),D,e("ul",null,[e("li",null,[l(a,{href:"https://docs.expo.dev/versions/latest/sdk/webview/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("WebView")]),_:1})])]),E,e("ul",null,[e("li",null,[l(a,{href:"https://pushy.reactnative.cn/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("PUSHY")]),_:1})])]),q,e("ul",null,[e("li",null,[l(a,{href:"https://docs.expo.dev/ui-programming/user-interface-libraries/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("User Interface component libraries - Expo")]),_:1})])]),F,e("ul",null,[B,e("li",null,[e("p",null,[l(a,{href:"https://tanstack.com/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("TanStack react-query")]),_:1})]),L]),e("li",null,[e("p",null,[l(a,{href:"https://mswjs.io/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("msw")]),_:1})]),J]),e("li",null,[e("p",null,[l(a,{href:"https://docs.pmnd.rs/zustand/getting-started/introduction",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("zustand")]),_:1})]),U]),e("li",null,[e("p",null,[l(a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("immer")]),_:1})]),W]),e("li",null,[e("p",null,[l(a,{href:"https://react-native-async-storage.github.io/async-storage/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("@react-native-async-storage/async-storage")]),_:1})]),j])]),G,e("ul",null,[e("li",null,[l(a,{href:"https://dart.dev/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("dart.dev")]),_:1})]),e("li",null,[l(a,{href:"https://flutter.dev/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("flutter.dev")]),_:1})])]),Q,e("ul",null,[$,e("li",null,[t("文档和示例完善, 第三方包生态较为完善, "),l(a,{href:"https://flutter.cn/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("中文文档")]),_:1})]),O]),z,e("ul",null,[e("li",null,[l(a,{href:"https://pub.dev/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("pub.dev")]),_:1}),t(" 官方插件市场")]),e("li",null,[l(a,{href:"https://pub-web.flutter-io.cn/",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("pub-web.flutter-io.cn")]),_:1}),t(" 插件市场中文站点")])]),H,K,e("ul",null,[Y,e("li",null,[t("小型 "),Z,t(" 组件 "),e("ul",null,[e("li",null,[l(a,{href:"https://pub.dev/packages/fluttertoast",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("fluttertoast")]),_:1})]),e("li",null,[l(a,{href:"https://pub.dev/packages/flutter_easyloading",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("flutter_easyloading")]),_:1})])])])]),M,e("ul",null,[e("li",null,[l(a,{href:"https://pub.dev/packages/camera",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("camera")]),_:1})])]),X,e("ul",null,[e("li",null,[e("p",null,[l(a,{href:"https://pub.dev/packages/image_picker",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("image_picker")]),_:1})])]),e("li",null,[e("p",null,[l(a,{href:"https://pub.dev/packages/wechat_assets_picker",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("wechat_assets_picker")]),_:1})]),ee])]),te,e("ul",null,[e("li",null,[l(a,{href:"https://pub.dev/packages/flutter_image_compress",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("flutter_image_compress")]),_:1})])]),le,e("ul",null,[e("li",null,[l(a,{href:"https://pub.dev/packages/mobile_scanner",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("mobile_scanner")]),_:1})]),e("li",null,[l(a,{href:"https://pub.dev/packages/flutter_barcode_scanner",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("flutter_barcode_scanner")]),_:1})])]),ae,re,e("ul",null,[e("li",null,[l(a,{href:"https://pub.dev/packages/location",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("location")]),_:1})]),e("li",null,[l(a,{href:"https://docs.page/Lyokone/flutterlocation",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("package:location docs")]),_:1})])]),ne,e("ul",null,[e("li",null,[l(a,{href:"https://pub.dev/packages/sqflite",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("sqflite")]),_:1})])]),ie,e("ul",null,[e("li",null,[l(a,{href:"https://pub.dev/packages/connectivity_plus",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("connectivity_plus")]),_:1})])]),oe,e("ul",null,[e("li",null,[l(a,{href:"https://pub.dev/packages/webview_flutter",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("webview_flutter")]),_:1})]),e("li",null,[l(a,{href:"https://pub.dev/packages/flutter_inappwebview",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("flutter_inappwebview")]),_:1})])]),se,e("p",null,[t("基于性能、安全和跨端实现难度的考虑, "),de,t(" 官方仍未将"),ce,t("功能列入"),l(a,{href:"https://github.com/flutter/flutter/blob/master/docs/roadmap/Roadmap.md#non-goals",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("规划")]),_:1}),t("之中, 但社区已有一些热更新实现:")]),e("ul",null,[e("li",null,[l(a,{href:"https://github.com/shorebirdtech/shorebird",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("shorebird")]),_:1})]),e("li",null,[l(a,{href:"https://pub.dev/packages/rfw",target:"_blank",rel:"noreferrer"},{default:r(()=>[t("Remote Flutter Widgets")]),_:1}),t(" 基于服务端的远程组件, 组件代码由服务端动态下发")])]),l(o),l(s)])}const ve=d(_,[["render",he]]);export{me as __pageData,ve as default};
