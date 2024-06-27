# app.json

## `expo.platforms`

`expo.platforms` 用于指定当前项目可运行的平台, 如指定 `web` 和 `android`:

```json
{
  "expo": {
    "platforms": ["web", "android"]
  }
}
```

`expo.platforms` 为字符串数组, 支持以下平台:

- `web`
- `android`
- `ios`

如无指定 `expo.platforms`, 默认为 `["android", "ios"]`

## `ios`

### `infoPlist`

等同于原生 `iOS` 配置文件 `info.plist`
