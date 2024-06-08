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

```json
{
  "main": "expo-router/entry"
}
```

### `Hermes` 引擎

`Hermes` 是专门针对 `React Native` 应用而优化的全新开源 `JavaScript` 引擎,
启用 `Hermes` 可以优化应用启动时间、减少内存和空间占用。

在 `React Native` 旧版本上默认使用 `JavaScript Core`引擎, 自`React Native 0.70`版本开始, 默认启用`Hermes` 引擎。

验证该引擎是否开启:

```ts
const isHermes = () => !!global.HermesInternal;
```

### 样式

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

- [CSS to React Native](https://csstox.surge.sh/)

  - 将 `CSS` 样式转换为 `React Native Stylesheet Objects`
  - [csstox GitHub 源码](https://github.com/jamesgeorge007/csstox)
  - [css-to-react-native](https://github.com/styled-components/css-to-react-native/tree/master)

TODO

- 使用原子类 `UnoCSS`

尺寸单位:

- `px`, {width: 50}, 表示 `50px` (`50` 不带单位)
- 百分比, 相对于**屏幕**的百分比尺寸

### 清除缓存

```bash
# https://docs.expo.dev/router/installation/#clear-bundler-cache
pnpm start -c
```

### 判断系统

```tsx
import {Platform} from 'react-native';

// TODO 枚举值为
console.log(Platform.OS);
```

### `Routing` 路由

- [File-based routing](https://docs.expo.dev/develop/file-based-routing/)

借助于 `expo-router` 包, 可实现基于文件的路由系统 (类 `Next` 和 `Nuxt` 元框架)

### `nativewind`

```bash
pnpm add nativewind@2.0.11

pnpm add tailwindcss@3.3.2 -D
pnpm add postcss autoprefixer -D
```

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

### 真机调试

- [Expo CLI](https://docs.expo.dev/more/expo-cli/)

### 平台相关适配

- 使用 `Platform` 判断当前平台:

  ```tsx
  import {Platform} from 'react-native';

  // "ios" | "android" | "windows" | "macos" | "web"
  console.log(Platform.OS);
  ```

  枚举值为:

  - "ios"
  - "android"
  - "windows"
  - "macos"
  - "web"

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

### `Storybook`

- [Storybook for React Native](https://github.com/storybookjs/react-native)

```bash
npx storybook@latest init
```

如根目录下无 `metro.config.js`, 则使用以下命令自动生成该文件:

```bash
npx expo customize metro.config.js
```

`metro.config.js`:

```js
// Learn more https://docs.expo.io/guides/customizing-metro
const path = require('path');
const {getDefaultConfig} = require('expo/metro-config');

const {generate} = require('@storybook/react-native/scripts/generate');

generate({
  configPath: path.resolve(__dirname, './.storybook')
});

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer.unstable_allowRequireContext = true;

config.resolver.sourceExts.push('mjs');

module.exports = config;
```

更新 `app/_layout.tsx`:

```tsx

```

### env

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
