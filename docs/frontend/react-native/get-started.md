# React Native Get Started

## 环境准备

- [Set up your environment](https://docs.expo.dev/get-started/set-up-your-environment/)

```bash
# watchman 是 Facebook 开发的监听文件系统变化的工具
# 用于开发时热更新 (Hot Reload)
brew install watchman

brew install --cask zulu@17
```

项目初始化:

```bash
npx create-expo-app@latest

pnpm reset-project
```

在项目根目录下运行:

```bash
npx expo install expo-dev-client
```

运行到不同平台:

```bash
pnpm start

# web 平台须借助于 react-native-web 和 react-dom 包
pnpm web

# 安卓平台须使用 Android Studio
pnpm android

# iOS 平台须使用 Xcode
pnpm ios
```

打包:

```bash
# https://docs.expo.dev/guides/local-app-development/#local-app-compilation

# Build native Android project
npx expo run:android

# Build native iOS project
npx expo run:ios

# https://docs.expo.dev/distribution/publishing-websites/
# 默认配置下, 打包产物位于根目录 dist 文件夹下
# 打包成功后最后一行会输出
# App exported to: dist
npx expo export -p web
```

报错 `Unable to resolve "@babel/runtime/helpers/interopRequireDefault" from "app/index.tsx"`

```bash
# 参考
# https://github.com/facebook/metro/issues/1047#issuecomment-1657200840
pnpm add @babel/runtime
```

运行 `doctor`:

```bash
npx @react-native-community/cli doctor

# 或
npx react-native doctor
```

## Basic

### `Android`

- `Android` 使用 `Gradle` 管理依赖, 须借助代理才能正常使用
- `React Native` 中使用了含原生代码的插件:

  ```bash
  npx react-native run-android
  ```

### `iOS`

- `iOS` 使用 `Cocoapods` 管理依赖, 须借助代理才能正常使用
- 通常需要借助 `Xcode` 编写原生代码及应用上架
- `React Native` 中使用了含原生代码的插件:

  ```bash
  # cd ios && pod install

  npx pod-install

  npx react-native run-ios
  ```

### Expo SDK Version

在 `package.json` 查看 `expo` 版本号即为 `Expo SDK Version`:

```json
{
  "dependencies": {
    "expo": "~51.0.9"
  }
}
```

### Entry point

`app.json`:

```json
{
  "main": "expo-router/entry"
}
```

### `Hermes` 引擎

`Hermes` 是专门针对 `React Native` 应用而优化的全新开源 `JavaScript` 引擎,
启用 `Hermes` 可以优化应用启动时间、减少内存和空间占用。

在 `React Native` 旧版本上默认使用 `JavaScript Core` 引擎, 自 `React Native 0.70` 版本开始, 默认启用 `Hermes` 引擎。

验证该引擎是否开启:

```ts
const isHermes = () => !!global.HermesInternal;
```

可在 `app.json` 中配置 `expo.jsEngine`:

```json
{
  "expo": {
    "jsEngine": "hermes"
  }
}
```

`expo.jsEngine` 支持以下值:

- `jsc`
- `hermes`

### 样式

- [Style -reactnative.dev](https://reactnative.dev/docs/style)

#### 内联样式 <code v-pre>style={{}}</code>

使用内联样式 <code v-pre>style={{}}</code>:

```tsx
<View
  style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }}
></View>
```

#### `StyleSheet.create({})`

使用 `StyleSheet.create({})`:

```tsx
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  link: {
    marginTop: 15,
    paddingVertical: 15
  }
});
```

注意:

- `React Native` 不支持 `CSS` 伪类选择器, 如 `::before` 和 `::after`
- 不支持渐变色, 可使用
  - [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
  - [Expo LinearGradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- [CSS to React Native](https://csstox.surge.sh/)

  - 将 `CSS` 样式转换为 `React Native Stylesheet Objects`
  - [csstox GitHub 源码](https://github.com/jamesgeorge007/csstox)
  - [css-to-react-native](https://github.com/styled-components/css-to-react-native/tree/master)

- 可使用适配 `RN` 的 `CSS` 原子类工具 `nativewind`

尺寸单位:

- `px`, {width: 50}, 表示 `50px` (`50` 不带单位)
- 百分比, 相对于**屏幕**的百分比尺寸

#### `nativewind`

- [Install tailwind using postcss](https://tailwindcss.com/docs/installation/using-postcss)
- [nativewind expo example](https://github.com/nativewind/nativewind/tree/next/examples/expo)

`nativewind` 是适配 `RN` 的 `CSS` 原子类工具, 须配合 `tailwindcss`、`postcss` 和 `autoprefixer` 使用:

```bash
pnpm add nativewind@2.0.11

pnpm add tailwindcss@3.3.2 -D
pnpm add postcss autoprefixer -D

# web support
pnpm add @expo/webpack-config postcss-loader -D
```

::: danger
必须锁死 `tailwindcss` 版本 `tailwindcss@3.3.`, 否则会出现问题:

[Use process(css).then(cb) to work with async plugins](https://stackoverflow.com/questions/76688256/getting-error-use-processcss-thencb-to-work-with-async-plugins)
:::

`babel.config.js`:

```js
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel']
  };
};
```

`tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', '*.tsx'],
  theme: {
    extend: {}
  },
  plugins: []
};
```

`postcss.config.js`:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
```

`assets/styles/global.css`:

```css
/* assets/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`app/_layout.tsx`:

```tsx
import {Stack} from 'expo-router';
import '../assets/styles/global.css';

// app/_layout.tsx
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
```

由 `tailwind` 生成 `output.css`:

```bash
npx tailwind -o output.css
```

可据此查看生成的 `css` 文件是否完全包含需要生成的 `css class` 类名

安装 `clsx` 以使用复杂类名:

```bash
pnpm add clsx
```

使用:

```tsx
import clsx from 'clsx';

const classes = clsx('foo', true && 'bar', 'baz');
```

#### `Styled Components`

- [Styled Components](https://styled-components.com/)

```tsx
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
```

### 仅开发生效

```tsx
if (process.env.NODE_ENV === 'development') {
  console.log('Hello in development');
}

if (__DEV__) {
  console.log('Another development-only conditional...');
}
```

在开发时上述代码会被保留, 生产环境则会被移除以提高性能

### 产物和性能分析

- [Analyzing JavaScript bundles](https://docs.expo.dev/guides/analyzing-bundles/)

### 更改默认端口号 8081

- [Using a port other than 8081](https://reactnative.dev/docs/next/troubleshooting#using-a-port-other-than-8081)

`RN` 运行到 `web` 时默认端口号为 `8081`,
如该端口被占用, 会提示使用其它端口, 但需要用户手动确认, 一方面端口号可能不固定, 另一方面增加了手动确认端口号的额外步骤.

因此更好的解决方案是设定一个较大的、极少可能被占用的端口号,
如指定端口号为 `8085`:

```json
{
  "scripts": {
    "web": "expo start --web --port=8085"
  }
}
```

### 清除缓存

```bash
# https://docs.expo.dev/router/installation/#clear-bundler-cache
pnpm start -c
# npx start -c
```

### 获取组件尺寸

- [LayoutEvent Object Type](https://reactnative.dev/docs/layoutevent)
- [TextLayoutEvent](https://reactnative.dev/docs/text#textlayoutevent)

```tsx
// view 使用 onLayout
<View
  onLayout={e => {
    // 组件自身尺寸
    this.viewWidth = e.nativeEvent.layout.width;
    this.viewHeight = e.nativeEvent.layout.height;
    // 屏幕尺寸
    this.screenWidth = Dimensions.gert('window').width;
    this.screenHeight = Dimensions.get('window').height;
  }}
/>

// Text 使用 onTextLayout
<Text onTextLayout={e => console.log(e,e.lines)}/>
```

### `Font` 字体

- [Expo Font](https://docs.expo.dev/versions/latest/sdk/font/)

### `Routing` 路由

- [File-based routing](https://docs.expo.dev/develop/file-based-routing/)

借助于 `expo-router` 包, 可实现基于文件的路由系统 (类 `Next` 和 `Nuxt` 元框架), 同时提供静态类型, 开发时可自动补齐

::: tip 根目录下 `expo-env.d.ts`

- 不应被提交至 `git`, 须添加至 `.gitignore`
- 须存在于 `tsconfig.json` 文件 `include` 字段中

:::

#### 入口目录由 `app` 更改为 `src`

- [Can I use /app inside /src #41](https://github.com/expo/router/issues/41)
- [Top-level src directory](https://docs.expo.dev/router/reference/src-directory/)

#### 平台相关路由

不支持条件编译写法, 但支持文件后缀名的平台路由:

- `app/index.tsx`
- `app/index.web.tsx`
- `app/index.android.tsx`
- `app/index.ios.tsx`

#### 路由跳转

使用 `Link` 标签 (引入自 `expo-router`):

```tsx
import {View} from 'react-native';
import {Link} from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/about">About</Link>
      {/* ...other links */}
      <Link href="/user/bacon">View user</Link>
    </View>
  );
}
```

`Link` 标签可传入 `asChild` 参数:

```tsx
import {Pressable, Text} from 'react-native';
import {Link} from 'expo-router';

export default function Page() {
  return (
    <Link href="/other" asChild>
      <Pressable>
        <Text>To other page</Text>
      </Pressable>
    </Link>
  );
}
```

`Link` 标签可传入 `push` 和 `replace` 参数, 表示往路由栈中追加路由或替换路由, 如不传入, 则使用默认策略:
跳转至最近的路由, 即路由栈中已存在该路由则跳转回去, 不存在则追加路由

使用 `router` 声明式导航:

```tsx
import {router} from 'expo-router';

export function logout() {
  router.replace('/login');
}
```

`router` 是不可变对象, 有以下导航方法:

- `navigate` 导航至某页面
- `push` 追加并导航至新页面
- `replace` 替换当前页面
- `back` 返回上一级页面
- `dismiss` 关闭多级页面
- `dismissAll` 关闭所有页面
- `canDismiss` 是否可以关闭当前页面, 即路由栈是否仅有一个路由
- `canGoBack` 是否可以向上返回, 即该路由是否位于路由栈栈底
- `setParams` 更新当前路由的查询参数 `query params`

或使用 `useRouter` 声明式导航:

```tsx
import {useRouter} from 'expo-router';

function toAbout() {
  const router = useRouter();

  router.push('/about');
}
```

使用 `useLocalSearchParams` 获取查询参数 `query parameters`:

```tsx
import {Text} from 'react-native';
import {useLocalSearchParams} from 'expo-router';

export default function Page() {
  const {query} = useLocalSearchParams<{query?: string}>();

  return <Text>Search: {query ?? 'unset'}</Text>;
}
```

#### 路由文件命名

路由文件名在 `web` 平台上会成为 `url` 的一部分, 因此推荐路由文件使用 `kebab-case` 命名, 如 `app/get-started.tsx`

::: tip
可查看 `.expo/types/router.d.ts` 文件中 `type StaticRoutes` 静态路由联合类型
:::

#### 报错

> Attempted to navigate before mounting the Root Layout component. Ensure the Root Layout component is rendering a Slot, or other navigator on the first render

原因是在路由文件里直接 `router.replace()`, 可使用 `useEffect`:

```tsx
// dont't do this directly
// setTimeout(() => {
//   router.replace('/home');
// }, 3000);

// wrap it in useEffect
useEffect(() => {
  setTimeout(() => {
    router.replace('/home');
  }, 3000);
}, []);
```

#### 登录相关

- [Role Based Navigation in React Native with Expo Router](https://galaxies.dev/react-native-role-based-navigation)
- [Authentication in Expo Router](https://docs.expo.dev/router/reference/authentication/)

### 平台相关适配

- 使用 `Platform` 判断当前平台:

  ```tsx
  import {Platform} from 'react-native';

  // "ios" | "android" | "windows" | "macos" | "web"
  console.log(Platform.OS);
  ```

  `Platform.OS` 枚举值为:

  - `ios`
  - `android`
  - `windows`
  - `macos`
  - `web`

  上述代码可被 `tree-shaking`, 即仅出现在相应平台, 而非全平台, [See Platform shaking](https://docs.expo.dev/guides/tree-shaking/#platform-shaking)

- `app` 目录下文件名不可出现平台相关文本

  如 `app/about.ios.tsx`、`app/about.android.tsx`、`app/about.web.tsx` 等不支持, 仅支持 `app/about.tsx`

- 非 `app` 目录下文件名可含平台相关文本

  假定 `components/about` 文件夹下有以下文件:

  - `index.tsx`
  - `index.web.tsx`
  - `index.android.tsx`
  - `index.ios.tsx`

  同时 `app/about.tsx` 文件如下:

  ```tsx
  export {default} from '@components/about';
  ```

  则在 `web/android/ios` 平台上将展示各自组件内容, 其余平台则按 `components/about/index.tsx` 展示

::: tip
上述特性在 `Expo Router 3.5.x` 中引入, 低版本可[参考](https://docs.expo.dev/router/advanced/platform-specific-modules/)
:::

### `env`

- [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv)

  ```bash
  pnpm add react-native-dotenv -D
  ```

  由于 `Expo SDK 49` 及以上版本已支持 `.env` 文件, 故不再推荐使用 `react-native-dotenv`

- [Environment variables in Expo](https://docs.expo.dev/guides/environment-variables/)

  按优先级从高到低排列:

  - `.env.development.local`, `development` 环境下加载
  - `.env.test.local`, `test` 环境下加载
  - `.env.production.local`, `production` 环境下加载
  - `.env.local`
  - `.env.development`, `development` 环境下加载
  - `.env.test`, `test` 环境下加载
  - `.env.production`, `production` 环境下加载
  - `.env`

  ::: tip

  - `env` 文件名含 `local` 表示敏感环境变量, 不应被 `git` 追踪和提交, 仅保留在本地或服务器
  - 仅包含前缀 `EXPO_PUBLIC` 的环境变量会被加载
  - 使用示例:

  ```js
  console.log(process.env.EXPO_PUBLIC_BASE_URL);
  ```

  :::

### `np` 和 `react-native-version`

- [React Native + GitHub Action = ❤️](https://www.obytes.com/blog/react-native-ci-cd-github-action)
- [react-native-template-obytes](https://github.com/obytes/react-native-template-obytes)

  `RN` 全面的模板库

```bash
pnpm add np react-native-version  -D
```

更新 `package.json`:

```json
{
  "repository": {
    "type": "git",
    "url": "git+https://github.com/<username>/<repo-name>.git"
  },
  "scripts": {
    "np": "np --no-publish",
    "postversion": "react-native-version"
  }
}
```

## 功能

### `Toast` 轻提示

- [Display a popup toast - Expo Docs](https://docs.expo.dev/ui-programming/react-native-toast/)
- [react-native-root-tips](https://github.com/openUmbrella/react-native-root-tips)
- [react-native-toast-message](https://github.com/calintamas/react-native-toast-message)
- [react-native-root-toast](https://github.com/magicismight/react-native-root-toast)

  基于 [react-native-root-siblings](https://github.com/magicismight/react-native-root-siblings) 实现

```bash
pnpm add react-native-root-siblings react-native-root-toast
```

```tsx
import Toast from 'react-native-root-toast';

let toast = Toast.show('Success', {
  duration: Toast.durations.LONG
});

Toast.hide(toast);

<Toast visible={visible}>Thanks for subscribing!</Toast>;
```

### `Loading` 加载效果

### `Network` 全局网络监听

### 图片放大查看

TODO `medium-zoom`

### `Icons` 图标

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

### `Chat` 聊天

- [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat)

### `List` 高性能长列表

- [react-native-gifted-listview](https://github.com/FaridSafi/react-native-gifted-listview)

### `Dropdown` 下拉列表

- [react-native-element-dropdown](https://www.npmjs.com/package/react-native-element-dropdown)

### `I18n` 国际化

- [facebook fbt](https://github.com/facebook/fbt)

  - [fbt rn demo](https://github.com/facebook/fbt/tree/rn-demo-app)

```

```
