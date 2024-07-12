# React Native CLI

## 环境配置

下载 `node` 和 `watchman`:

```bash
brew install node
brew install watchman
```

- 如果已安装 `node` 且 `node` 版本高于 `18`, 则可跳过 `brew install node`
- 终端输入 `brew info watchman` 查看是否已安装 `watchman`

下载 `JDK`:

```bash
brew install --cask zulu@17

# Get path to where cask was installed to double-click installer
brew info --cask zulu@17
```

下载成功提示:

> installer: Package name is Azul Zulu JDK 17.50+19
> installer: Installing at base path /
> installer: The install was successful.
> 🍺 zulu@17 was successfully installed!

使用 `open .bashrc` 或 `open .zshrc` 打开终端配置文件并配置环境变量 `JAVA_HOME`:

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
```

如果已安装 `JDK`, 请确保其版本为 `JDK 17`, 并正确配置环境变量 `JAVA_HOME`

下载 `Android Studio`:

- [Android Studio Download](https://developer.android.com/studio/index.html)

配置环境变量:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

查看环境变量配置:

```bash
# /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
echo $JAVA_HOME

# /Users/lh-pc/Library/Android/sdk
echo $ANDROID_HOME
```

使用 `Wi-Fi` 连接 `Android` 真机调试:

- [Method 2: Connect via Wi-Fi](https://reactnative.dev/docs/running-on-device#method-2-connect-via-wi-fi)
- 电脑和 `Android` 设备处于同一 `Wi-Fi`

## 清除缓存

安装依赖:

```bash
npm install @react-native-community/cli-clean -D
```

```bash
npx react-native clean
```

可接受参数:

- `--include` 逗号分隔的字符串表达式, 如 `npm,yarn`, 支持以下值:

  - `android`
  - `cocoapods`
  - `metro`
  - `npm`
  - `watchman`
  - `yarn`

- `--project-root` 设定运行的目录, 默认为当前工作目录 (脚本运行目录)
- `--verfiy-cache` 是否二次确认以清除缓存, 当前仅支持 `npm` 缓存清除前二次确认

## doctor 和 info

安装依赖:

```bash
npm install @react-native-community/cli-doctor -D
```

```bash
npx react-native doctor

npx react-native info
```
