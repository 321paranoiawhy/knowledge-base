# Turbo Module

## Reading Materials

- [react-native-new-architecture](https://github.com/reactwg/react-native-new-architecture)
- [Turbo Native Modules for Android – Resize Image](https://blog.200oksolutions.com/turbo-native-modules-for-android-resize-image/)
- [Become a React Native Developer — The New Architecture](https://medium.com/@under_the_hook/react-native-the-new-architecture-c4ba8ed8b452)

## 特点

- 懒加载 (仅开发时)
- 使用 `JSI (JavaScript Interface)` 进行 `JS` 和 `native` 间通信, 性能和效率更高于 `Bridge` 桥接方式
- 类型安全
- 向下兼容?
- 如何立即加载, 即取消懒加载特性

## 开启新架构

### 安卓

在 `app/android/gradle.properties` 文件中设置:

```properties
newArchEnabled=true
```

```txt
RTNPort
├── android
│   ├── build.gradle
│   └── src
│       └── main
│           └── java
│               └── com
│                   └── rtnport
│                       └── PortPackage.java
├── js
│   └── index.ts
└── package.json
```

在 `app` 目录下安装 `Turbo Module`:

```bash
# 根目录下
cd app

# npm install ../<Turbo Module Name>
npm install ../RTNPort
```

安装成功后可在 `app/package.json` 中看到如下依赖:

```json
{
  "dependencies": {
    "rtn-port": "file:../RTNPort"
  }
}
```

`file:../RTNPort` 表示本地依赖

运行 `Codegen`:

```bash
# 根目录下
cd app/android

./gradlew generateCodegenArtifactsFromSchema
```

运行 `Codegen` 成功后可在以下目录查看:

- `RNTPort/android/build/generatedsource/codegen`
- `app/node_modules/rtn-port/android/build/generated/source/codegen`

```bash
# 根目录下
cd app/node_modules/rtn-port/android/build/generated/source/codegen
```

目录结构为:

```txt
codegen
├── java
│   └── com
│       └── rtnport
│           └── NativePortSpec.java
├── jni
│   ├── CMakeLists.txt
│   ├── RTNPortSpec-generated.cpp
│   ├── RTNPortSpec.h
│   └── react
│       └── renderer
│           └── components
│               └── RTNPortSpec
│                   ├── ComponentDescriptors.cpp
│                   ├── ComponentDescriptors.h
│                   ├── EventEmitters.cpp
│                   ├── EventEmitters.h
│                   ├── Props.cpp
│                   ├── Props.h
│                   ├── RTNPortSpecJSI-generated.cpp
│                   ├── RTNPortSpecJSI.h
│                   ├── ShadowNodes.cpp
│                   ├── ShadowNodes.h
│                   ├── States.cpp
│                   └── States.h
└── schema.json
```

注意, 当安卓原生代码或 `Turbo Module` 项目内代码发生变化时,
须重新执行 `codegen`, 并重新运行 `APP`, 否则会出现意料之外的错误

## Metro: unable to resolve module

- [Linking Local Packages in React Native the Right Way](https://medium.com/@alielmajdaoui/linking-local-packages-in-react-native-the-right-way-2ac6587dcfa2)
- [Configuration of React Native CLI/Expo Apps in Monorepos](https://medium.com/@stevegalili/configuration-of-react-native-cli-expo-apps-in-monorepos-%EF%B8%8F-6485b4f2cc43)

配置 `metro.config.js` 文件中的 `resolver.nodeModulesPaths` 和 `watchFolders`

## `create-react-native-library`

```bash
npx create-react-native-library@latest serial-port
```

## 类型映射

- [Argument Types](https://reactnative.dev/docs/native-modules-android#argument-types)
- [ReadableMap](https://javadoc.io/doc/com.facebook.react/react-native/0.20.1/com/facebook/react/bridge/ReadableMap.html)

类型映射 (`Java` -> `JavaScript`):

- `Boolean` <-> `Bool`
- `Integer` -> `Number`
- `Double` <-> `Number`
- `Float` -> `Number`
- `String` <-> `String`
- `ReadableMap` <-> `Object`, `WritableMap` <-> `Object`
- `ReadableArray` <-> `Array`, `WritableArray` <-> `Array`

```java
// 获取 key 对应值的类型
ReadableType type = readableMap.getType(key);
```

类型转换:

```java
import com.facebook.react.bridge.Arguments;

WriteableArray array = Arguments.createArray();

List list = [1, 2, 3];
WriteableArray arrayFromList = Arguments.fromList(list);

WritableMap map = Arguments.createMap();
```

## `Map`

- [ReadableMap](https://javadoc.io/doc/com.facebook.react/react-native/0.20.1/com/facebook/react/bridge/ReadableMap.html)
- [WritableMap](https://javadoc.io/doc/com.facebook.react/react-native/0.20.1/com/facebook/react/bridge/WritableMap.html)

### `ReadableMap`

`ReadableMap` 有以下方法:

- `getArray(String name)`
- `getBoolean(String name)`
- `getDouble(String name)`
- `getInt(String name)`
- `getMap(String name)`
- `getString(String name)`
- `getType(String name)`, 返回值类型为 `ReadableType`
- `isNull(String name)`
- `keySetIterator()`

### `WritableMap`

`WritableMap` 继承自 `ReadableMap`, 除有 `ReadableMap` 上的方法外, 自身还有以下方法:

- `merge`
- `putArray`
- `putBoolean`
- `putDouble`
- `putInt`
- `putMap`
- `putNull`
- `putString`

## `Array`

- [ReadableArray](https://javadoc.io/doc/com.facebook.react/react-native/0.20.1/com/facebook/react/bridge/ReadableArray.html)
- [WritableArray](https://javadoc.io/doc/com.facebook.react/react-native/0.20.1/com/facebook/react/bridge/WritableArray.html)

### `ReadableArray`

`ReadableArray` 有以下方法:

- `getArray(int index)`
- `getBoolean(int index)`
- `getDouble(int index)`
- `getInt(int index)`
- `getMap(int index)`
- `getString(int index)`
- `getType(int index)`, 返回值类型为 `ReadableType`
- `isNull(int index)`
- `size()`

### `WritableArray`

`WritableArray` 继承自 `ReadableArray`, 除有 `ReadableArray` 上的方法外, 自身还有以下方法:

- `pushArray`
- `pushBoolean`
- `pushDouble`
- `pushInt`
- `pushMap`
- `pushNull`
- `pushString`
