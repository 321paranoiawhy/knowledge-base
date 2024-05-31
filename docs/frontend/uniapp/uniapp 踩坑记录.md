---
# title: Vitepress Basic
tags: ['UniAPP', '踩坑记录']
---

# Uniapp 踩坑记录

## `nav-bar`

系统自带的导航栏只能更改字体颜色, 无法更改字体大小或其他字体样式, 如确有需要, 可使用第三方 `ui` 组件库 `nav-bar` 组件

## 页面背景色

`pages.json` 全局配置:

```json
{
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  }
}
```

局部页面更改背景色:

```vue
<style>
page {
	background-color: red;
}
</style>
```

## `Stylelint` 标签识别问题

`Stylelint` 配置以忽略 `page`标签识别问题:

```js
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
  rules: {
    // 处理小程序标签 unknown 问题, 如 page 标签
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['page']
      }
    ]
  }
};

```

## 组件样式穿透失效

`Vue2` 项目可做如下配置:

```vue
<script lang="ts">  
export default {  
  options: {  
	// 默认值为 apply-shared
    styleIsolation: 'shared'  
  }  
};  
</script>
```

- [组件样式隔离 - 微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)

`Vue3` 在组件内除 `<script setup>` 外再新增一个 `<script>` 标签, 注意两个 `script` 标签 `lang` 属性值须一致, 否则编译报错。

**小程序默认只页面穿透到组件, 而不能组件穿透到组件**

## 不支持的 `API`

### 浏览器

`document`/`window`/`localstorage` 等浏览器特有 `API` 仅在 `H5` 平台适用, `APP-PLUS` 和 `MP-WEIXIN` 平台均不支持

### `CSS`

### `Vue`

不支持以下 `API`:

- `keep-alive` 缓存组件
- `component :is` 动态组件
- 不支持自定义指令 `directives`
- 不支持自定义过滤器 `filters`
- 不支持内置指令 `v-html`/`v-once`
- `transition`/`transition-group`
- 小程序上不支持 `jsx/tsx`, `H5` 和 `Web` 平台支持, 须安装相应插件
- 不支持 `Teleport` 和 `Suspense`

## `H5 scoped`

`uniapp` 在 `H5` 平台上会自动开启 `scoped` 以样式隔离, 可使用以下方式规避:

```vue
<style noscoped lang="scss">
</style>
```

- [uni-app issues #4491](https://github.com/dcloudio/uni-app/issues/4491#issuecomment-1695412517)

## 配置 `easycom`

```json
{
  "easycom": {
    // uni-ui 引入, 详见 https://github.com/dcloudio/uni-app/issues/3016
    // vue-cli vue.config.js transpileDependencies:['@dcloudio/uni-ui']
    // vite 配置 autoscan 为 true
    // 否则 h5 控制台 uni-ui 组件报错
    // Failed to resolve component: uni-fab
    "autoscan": true,
    // 注意一定要放在custom里，否则无效，https://ask.dcloud.net.cn/question/131175
    "custom": {
      // uview-plus
      "^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue",
      // uni-ui https://github.com/dcloudio/uni-ui
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
      // lh
      "^lh-(.*)": "@subComponents/lh-$1.vue"
    }
  },
}
```

## 条件编译

- [条件编译处理多端差异](https://uniapp.dcloud.net.cn/tutorial/platform.html)
- `#ifdef PLATFORM` 表示 `if defined in PLATFORM`
- `#ifndef PLATFORM` 表示 `if not defined in PLATFORM`
- `#ifdef PLATFORM_A || PLATFORM_B` 表示在 `PLATFORM_A` 或 `PLATFORM_B` 平台编译

```txt
// H5
// #ifdef H5
// #endif

// 非 H5
// #ifndef H5
// #endif

// ifdef MP-WEIXIN
// #endif

// MP-WEIXIN 或 H5
// ifdef MP-WEIXIN || H5
// #endif

// APP-PLUS
// ifdef APP-PLUS
// #endif

// APP-NVUE
// #ifdef APP-NVUE
// #endif

// Vue2
// #ifdef VUE2
// #endif

// Vue3
// #ifdef VUE3
// #endif
```

条件编译支持的平台:

- `H5`
- `MP-WEIXIN`
- `APP-PLUS`

相应的环境变量可按如下方式获取:

```ts
// 可能值为 h5/mp-weixin/mp-alipay/mp-baidu/mp-taobao/mp-qq
process.env?.UNI_PLATFORM
```

## 图片无损压缩

- `APP-PLUS` 上使用 `plus.zip.compressImage`, [文档](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.compressImage)
- `MP-WEIXIN`
- `H5`

## 全局事件总线

`uniapp` 提供了以下 `API`, 可跨页面、跨组件进行事件监听、触发和移除

- `uni.$on` 监听指定事件
- `uni.$emit` 触发指定事件
- `uni.$once` 监听指定事件, 但触发一次后自动移除该监听, 而无需手动移除监听
- `uni.$off` 移除指定事件, 如果不传入参数, 则移除 `APP` 级别的所有事件监听; 如果仅传入事件名, 则移除该事件名对应的所有监听; 如果传入了事件名和相应回调(同一引用), 则仅移除该事件回调的监听器.

## 登录和首页逻辑

- `pages.json` 中 `pages` 数组第一项设置为登录页
- 用户未登录时显示登录页
- 用户已登录则自动跳转至首页

此时如果用户已登录, 重新进入微信小程序时会出现首页->登录页跳转动画, 首页会一闪而过, 可按如下方式解决:

- 在登录页中添加 `loading`, 再根据用户是否登录决定取消 `loading` 还是 `reLaunch` 到首页
- 设置空白页作为启动页, 再根据用户是否登录决定 `reLaunch` 到登录页还是首页, 首页若有 `tabbar`, 则必须使用 `uni.switchTab` 方法, 而不能是 `uni.navigateTo`/`uni.reLaunch`/`uni.redirectTo` 等方法

## 并发限制

浏览器默认并发请求限制数为 `6`, 可查阅 [/net/socket/client_socket_pool_manager.cc](https://github.com/chromium/chromium/blob/main/net/socket/client_socket_pool_manager.cc#L44-L55)

- [p-limit - npm](https://www.npmjs.com/package/p-limit)
- [p-queue - npm](https://www.npmjs.com/package/p-queue)

## 隐藏 `canvas`

- `canvas` 是原生组件, 始终在其他元素上方, `display: none;` 不会隐藏, 可使用 `left: 99999px` 或在 `canvas` 外层嵌套一个元素并设置 `style="width: 0; height: 0; overflow: hidden;"`

## `requestAnimationFrame` 兼容

## 网络请求

- 小程序默认有访问域名限制, 需要在后台配置白名单
- 开发环境下可跳过域名校验, 生产环境则需要正确配置, 且必须发起 `HTTPS` 请求

## `JSX` / `TSX`

- 只支持 `H5` 和 `APP`, 不支持小程序, [JSX/TSX 支持](https://zh.uniapp.dcloud.io/tutorial/syntax-jsx.html)

## 监听滚动事件

在页面内监听滚动事件:

```vue
<script setup lang="ts">
import {onPageScroll} from '@dcloudio/uni-app'

onPageScroll((e) => {console.log('页面滚动了', e.scrollTop);})
</script>
```

在组件内监听页面滚动, 在对应页面添加滚动事件并使用 `uni.$emit` 发出滚动事件, 在子组件内使用 `uni.$on` 接收滚动事件。

或使用 `scroll-view` 标签

```vue
<script setup lang="ts">
const onScroll = (e) => {console.log('页面滚动了', e.scrollTop);}
</script>

<template>
	<scroll-view scroll-y @scroll="onScroll">
</template>
```

### 滚动穿透

滚动穿透即禁止蒙版下页面滚动:

```vue
<view @touchmove.stop.prevent></view>
```
### 滚动吸顶

## `useLoading`

须借助 `@uni-helper/vite-plugin-uni-layouts` 实现 `loading` 全局单例

## `onReady` 和 `onMounted`

如果须获取元素或其位置信息, 页面须在 `onReady` 中获取, 组件须在 `onMounted` 中获取, 或使用 `nextTick` 确保元素已挂载

`boundingClientRect` 获取到 `null`:

- 在组件中增加 `in(this)` 或 `in(getCurrentInstance())`, 且须在 `onReady` 或 `onMounted` 中调用
- 动态 `id` 确保首字母非数字, 否则微信小程序无法识别
- 末尾须有 `.exec()`, 否则回调均不执行

## 检查 `API` 兼容性

### CSS

使用 `CSS` 检查:

```css
.image {
	aspect-ratio: 16 / 9;
}

@supports not(aspect-ratio: 16 / 9) {

}
```

使用 `JS` 检查:

```js
// 返回布尔值, 取决于当前浏览器的支持情况
CSS.supports('aspect-ratio', '16 / 9')
```

### JS

```js
if (typeof requestIdleCallback !== 'undefined' && typeof window.requestIdleCallback === 'function') {
	// 支持 requestIdleCallback
}

if (typeof document.body.scrollIntoView === 'function') {
	// 支持 scrollIntoView
}

if ('scrollBehavior' in document.documentElement.style) {
	// 支持 scrollBehavior
}
```

## 获取元素信息

`Vue2`:

```js
// 直接传入 this
uni.createSelectorQuery().in(this).select('.class')
```

`Vue3`:

```ts
const instance = getCurrentInstance();

// 使用 getCurrentInstance() 代替 Vue2 中的 this
uni.createSelectorQuery().in(instance).select('.class')
```


## 生命周期

### uniapp

`uniapp` 的**应用生命周期**:

- `onLaunch` 仅在 `App.vue` 中存在, 全局仅触发一次
- `onPageNotFound` 仅在 `APP` 启动时页面路径不存在时触发, 而不会在路由跳转时(如 `navigateTo` )触发, 此时须另行处理
- `onShow` 当 `uniapp` 启动或从后台进入前台时触发
- `onHide`当 `uniapp` 从前台进入后台时触发
- `onError` 监听报错
- `onThemeChange` 系统主题变化
- `onUnhandledRejection` 监听未处理的 `Promise` 拒绝事件

`uniapp` 的**页面生命周期**:

- `onInit` 页面初始化
- `onLoad` 页面加载成功时触发, 其参数为上一个页面传递的数据, 数据类型为对象 `Object`
- `onShow` 页面初次渲染完成
- `onReady` 页面显示
- `onHide` 页面隐藏
- `onUnload` 页面卸载
- `onResize` 窗口尺寸变化
- `onPullDownRefresh` 顶部下拉, 常用于下拉刷新
- `onReachBottom` 滚动触底事件, 常用于无限滚动列表追加数据
- `onPageScroll` 页面滚动事件
- `onTabItemTap` 点击 `tab` 时触发
- `onNavigationBarButtonTap` 原生标题栏按钮点击事件
- `onBackPress` 监听页面返回事件
- `onShareAppMessage` 用户点击右上角分享按钮, 仅支持小程序平台上
- `onShareTimeline` 用户点击右上角转发到朋友圈, 仅支持微信小程序
- `onAddToFavorites` 用户点击右上角收藏, 仅支持微信小程序
- `onNavigationBarSearchInputChanged` 原生标题栏搜索输入框文本**变化**事件
- `onNavigationBarSearchInputConfirmed`原生标题栏搜索输入框**搜索**事件, 用户点击软键盘的搜索按钮时触发
- `onNavigationBarSearchInputClicked` 原生标题栏搜索输入框**点击**事件


### Vue2

### Vue3

`Vue3` 的生命周期:

- `onMounted`
- `onUnmounted`
- `onBeforeDestory`

## `APP` 热更新

TODO

## 配置启动页

在 `pages.json` 配置 `condition`:

```json
{
	"condition": {
    "current": 1,
    "list": [
      {
        "name": "Test Page 1",
        "path": "subpackages/info-collection/info-collection"
      },
      {
        "name": "Test Page 2",
        "path": "subpackages/sample-database/sample-database"
      }
    ]
  },
}
```

- 上述配置仅在开发调试时生效, 打包后无效, 打包后仍取 `pages` 数组首项为启动页。
- 修改完 `pages.json` 后重新启动项目, 即可在微信开发者工具顶部普通编译点击切换为 `Test Page 1` 或 `Test Page 2`

## 自定义属性

```vue
<script>
const onClick = (e) => {
	// custom
	console.log(e.target.dataset.custom)
	// custom-info
	// 注意这里的驼峰写法会被转换为全小写
	console.log(e.target.dataset.custominfo)
}
</script>

<template>
<view data-custom="custom" data-customInfo="custom-info" @click="onClick">自定义属性</view>
</template>
```

使用 `boundingClientRect` 这个 `API` 也会获取到 `dataset` 属性值:

```vue
<script>
onMounted(() => {
	const item = uni.createSelectorQuery().in(instance).select('#id')
	item.boundingClientRect((data) => {
		console.log(data.dataset)
	}).exec()
})
</script>
```

## 自动更新版本号

版本号 `x.y.z`:

- `x` 表示 `Major`, 主版本号, 大版本
- `y` 表示 `Minor`, 次版本号, 小版本
- `z` 表示 `Patch`, `Bug Fix` 时自增

## 自动生成 `CHANGELOG.md`

## 安全区适配

`IOS` 全面屏底部会有小黑线, 影响元素可见性和用户可操作性, 为此须对其进行安全区适配。

以 `safe-area-inset-bottom` 为例:

```css
.iPhone {
  /* #ifndef H5 */
  padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
  padding-bottom: env(safe-area-inset-bottom, 20px); /* 兼容 iOS >= 11.2 */
  /* #endif */
  
  /* #ifdef H5 */
  padding-bottom: 20px;
  /* #endif */
}
```

- [env - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/env)
- [安全区适配 - uView](https://www.uviewui.com/components/safeAreaInset.html)

- `safe-area-inset-left`
- `safe-area-inset-right`
- `safe-area-inset-top`
- `safe-area-inset-bottom`

`H5` 上还需对 `head meta` 标签进行设置:

```html
<head>
	<meta name="viewport" content="viewport-fit=cover" />
</head>
```

小程序中无须设置, 因其 `viewport-fit` 值默认为 `cover`。

## 环境区分

对于微信小程序:

```js
// develop 开发版
// trial 体验版
// release 正式版
__wxConfig.envVersion
```

对于 `H5`:

```js
// develepment 开发版
process.env.NODE_ENV
```

## 动态插槽

- [动态插槽名](https://4ark.me/post/uni-app-issues/#6-%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D)

组件内动态插槽使用:

```vue
<!-- HACK: uni-app 处理动态 slot 名字不兼容, 需要使用不同的语法 -->
<!-- #ifdef H5 -->
<slot :name="`tab:${item.key}`"></slot>
<!-- #endif -->
<!-- #ifdef MP-WEIXIN -->
<slot name="tab:{{item.key}}"></slot>
<!-- #endif -->
```

组件内使用:

```vue
<view>
  <!-- HACK: uni-app 处理动态 slot 名字不兼容, 需要使用不同的语法 -->
  <!-- #ifdef H5 -->
  <template v-for="item in list" :slot="`tab:${item.id}`">
    <post-list :key="item.id" />
  </template>
  <!-- #endif -->

  <!-- #ifdef MP-WEIXIN -->
  <template v-for="item in lits" slot="tab:professional:{{item.id}}">
    <post-list :key="item.id" />
  </template>
  <!-- #endif  -->
</view>
```
