# ADB

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

查看 `abi`:

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
