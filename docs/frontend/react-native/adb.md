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

已成功连接一个安卓设备并执行端口转发时报错 `c`
