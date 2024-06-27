# `Expo`

## `Tools` 工具链

### `Expo CLI`

### `EAS CLI`

- [Create your first build](https://docs.expo.dev/build/setup/)
- [Expo Go 实践教程 - 项目搭建](https://clwy.cn/pages/expo-project-setup)

全局安装 `eas-cli`:

```bash
pnpm add eas-cli -g
```

登录:

```bash
eas login
```

检查是否登录:

```bash
eas whoami
```

配置:

```bash
eas build:configure
```

配置文件为 `eas.json`, 请确保它位于项目根目录

打包:

```bash
expo build --platform android

expo build --platform ios
```

应用上架:

```bash
expo submit
```

### `Expo Go`

安卓或苹果手机应用商店搜索并下载 `Expo Go`, 可用于真机调试

::: tip
须确保位于同一 `WiFi` 下
:::

### `Expo Orbit`

`Expo Orbit` 目前仅支持 `macOS`, 官方未来计划支持其他平台

- [Expo Orbit](https://github.com/expo/orbit)
- [Expo Orbit Releases](https://github.com/expo/orbit/releases)

  可在上述 `Releases` 页面下载相应版本

或使用 `HomeBrew` 下载:

```bash
brew install expo-orbit
```

### `Snack`

- [Snack](https://snack.expo.dev/)

`Snack` 可在浏览器内在线运行、调试 `Expo` 项目

::: tip
浏览器内调试 `android` 和 `iOS` 由 [appetize](https://appetize.io/) 提供技术支持
:::

## 开发调试

```bash
# 或 npx expo start
pnpm start

npx expo start --localhost
npx expo start --tunnel
```

::: tip

- 输入 `a` 打开 `android` 模拟器进行开发和调试
- 输入 `i` 打开 `iOS` 模拟器进行开发和调试
- 输入 `w` 打开浏览器进行开发和调试
- 输入 `r` 重新加载 `app` (`reload app`)
- 输入 `s` 可切换模式, 支持以下几种模式:
  - Expo Go
  - development build
    :::
- 输入 `j` 打开 `debugger`
