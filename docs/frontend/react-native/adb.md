# ADB

- [ADB 操作命令详解及用法大全](https://wade-test.readthedocs.io/zh/latest/ADB%20%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4%E8%AF%A6%E8%A7%A3%E5%8F%8A%E7%94%A8%E6%B3%95%E5%A4%A7%E5%85%A8/)

`ADB` 全称为 `Android Debug Bridge`, 意为安卓调试桥

```bash
# 查看 adb 版本
adb version

# 查看已连接的安卓设备列表
adb devices

# 连接指定的安卓设备
adb connect <安卓设备 ip>
# example
# adb connect 10.66.62.15

# 移除指定的安卓设备
adb -s 10.66.62.15 kill-server
# 或使用 disconnect
adb disconnect 10.66.62.15

# 端口转发
adb reverse tcp:8081 tcp:8081
```

## 查看 `abi`

```bash
# 查看受支持的单个 abi, 推荐将其作为安卓打包的目标架构
# 示例输出: armeabi-v7a
adb shell getprop ro.product.cpu.abi

# 查看受支持的 abi 列表
# 示例输出: armeabi-v7a,armeabi
adb shell getprop ro.product.cpu.abilist

# grep 表达式过滤出含 abi 的信息
adb shell getprop | grep abi
```

## 互传文件

```bash
# 电脑传文件至手机
adb push <file path> <target folder>
# example 将打包后的安卓 apk 传至手机 sdcard 根目录
# adb push android/app/build/outputs/apk/release/app-release.apk /sdcard

# 手机传文件至电脑
adb pull <file path> <target folder>
```

下载 `apk`:

```bash
# 可能需要在手机上确认安装操作
adb install android/app/build/outputs/apk/release/app-release.apk
```

::: info
Performing Streamed Install
Success
:::

## 卸载 `apk`

```bash
adb uninstall [-k] <package-name>
```

`<package-name>` 表示应用的包名, `-k` 参数可选, 表示卸载应用但保留数据和缓存目录。

## 清除应用数据

```bash
adb shell pm clear <package-name>
```

`<package-name>` 表示应用名包, 这条命令的效果相当于在设置里的应用信息界面点击了「清除缓存」和「清除数据」。

## 手机文件目录

```bash
# 进入手机文件根目录
adb shell

# 查看当前目录下文件夹和文件
ls
```

## 重启真机

```bash
# 普通重启
adb reboot

# 重启设备并进去 recovery 模式
adb reboot recovery
# 重启设备并进去 bootloader 模式
adb reboot bootloader
```

## 查看应用列表

查看应用列表通用表达式:

```bash
adb shell pm list packages [-f] [-d] [-e] [-s] [-3] [-i] [-u] [--user USER_ID] [FILTER]
```

```bash
# 查看所有应用
adb shell pm list packages

# 查看系统应用
adb shell pm list packages -s

# 查看第三方应用
adb shell pm list packages -3

# 查看所有包名含有 google 的应用
# TODO 如何多条件过滤, google svox iflytek
adb shell pm list packages google
```

## 查看应用详细信息

```bash
adb shell dumpsys package <package-name>
```

`<package-name>` 表示应用包名。运行次命令的输出中包含很多信息, 包括 `Activity Resolver Table`、`Registered ContentProviders`、包名、`userId`、安装后的文件资源代码等路径、版本信息、权限信息和授予状态、签名版本信息等。
