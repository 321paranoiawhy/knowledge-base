# React Native CLI

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
