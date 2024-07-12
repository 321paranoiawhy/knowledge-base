# NativeWind

- [Day 8 - 在你的 React Native Expo 專案使用 NativeWind 套件](https://ithelp.ithome.com.tw/articles/10317107)

## Basic 基础/哲学

- `1rem` 对应 `16px`, 不带单位的数字 `1` 表示 `0.25rem (4px)`, 不建议修改此数值映射规则
- 默认仅提供有限的原子类, 如 `grow` 仅存在 `grow` 和 `grow-0` 两个原子类, 分别表示 `flex-grow: 1;` 和 `flex-grow: 0;`
- 任意值须用 `[]` 包裹, 如 `w-[100px]`, 应注意 `w-100` 与 `w-[100px]` 并不等价
- 原子类中使用 `theme` 变量: `text-theme(primary.red)`, 须确保 `primary.red` 定义于 `theme` 中
- 由 `tailwind` 生成 `output.css`:

  ```bash
  npx tailwind -o output.css
  ```

  可据此查看生成的 `css` 文件是否完全包含需要生成的 `css class` 类名

### 引用配置文件

- [Referencing in JavaScript - tailwindcss](https://tailwindcss.com/docs/configuration#referencing-in-java-script)

```js
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from './tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

fullConfig.theme.width[4];
// => '1rem'

fullConfig.theme.screens.md;
// => '768px'

fullConfig.theme.boxShadow['2xl'];
// => '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
```

上述代码会生成过多数据, 可使用 [babel-plugin-preval](https://github.com/kentcdodds/babel-plugin-preval) 提前在编译时生成静态代码以规避此问题

### `calc`

`CSS` 中使用 `calc` 运算符前后须含空格, 否则不生效:

```css
div {
  width: calc(100% - 50px);
}
```

`tailwind` 原子类中使用 `calc` 运算符前后不含空格, 否则不生效:

```html
<div class="w-[calc(100%-50px)]"></div>
```

或使用 `_` 代替 `CSS` 中应有空格:

```html
<div class="w-[calc(100%_-_50px)]"></div>
```

See [Handling whitespace -tailwindcss](https://tailwindcss.com/docs/adding-custom-styles#handling-whitespace)

`unocss` 原子类中使用 `calc` 运算符前后同样不含空格以[对齐 tailwind](https://github.com/unocss/unocss/issues/180):

```html
<div class="w-[calc(100%-50px)]"></div>
```

### `!important`

- [Important modifier - tailwindcss](https://tailwindcss.com/docs/configuration#important-modifier)

`tailwind` 中使用前缀标记 `!` 表示 `!important`:

```html
<div class="!m-auto"></div>
```

`unocss` 中使用后缀标记 `!` 表示 `!important`:

```html
<div class="m-auto!"></div>
```

### `CSS` 变量

使用动态值, 无需使用 `var(...)`

- `bg-[--bg-red]` <-> `background-color: var(--bg-red);`

`SCSS` 变量:

- `bg-[$bg-red]` <-> `background-color: $bg-red;`

## 插件

#### @tailwindcss/aspect-ratio

- [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
- [tailwindcss-aspect-ratio](https://github.com/webdna/tailwindcss-aspect-ratio) 已废弃, 推荐使用 `@tailwindcss/aspect-ratio`

`aspect-ratio` 属性兼容性较差, 可使用 `@tailwindcss/aspect-ratio` 插件以兼容更低版本的浏览器

```bash
pnpm add @tailwindcss/aspect-ratio -D
```

`tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [require('@tailwindcss/aspect-ratio')]
};
```

## 字体

### 字体大小 `font-size`

`tailwind` 原子类中使用 `text-<size>` 语法表示 `font-size: <size>`:

- `text-2xl` <=> `font-size: 1.5rem;` (`24px`), 同时设定 `line-height: 2rem;` (`32px`)
- `text-4xl` <=> `font-size: 2.25rem;` (`36px`), 同时设定 `line-height: 2.5rem;` (`40px`)
- 任意值
  - `text-[14px]` <=> `font-size: 14px;`
  - `text-[14px]/[20px]` <=> `font-size: 14px; line-height: 20px;`

本项目常用:

- `text-2xl/[43px]` <=> `font-size: 1.5rem; line-height: 43px;`

### 字重 `font-weight`

`tailwind` 原子类中使用 `font-<weight>` 语法表示 `font-weight: <weight>`:

- `font-light` <=> `font-weight: 300;`
- `font-normal` <=> `font-weight: 400;`
- `font-medium` <=> `font-weight: 500;`
- `font-semibold` <=> `font-weight: 600;`
- `font-bold` <=> `font-weight: 700;`

### 文本颜色 `text-color`

`tailwind` 原子类中使用 `text-<color>` 语法表示 `text-color: <color>`:

- `text-white` 纯白色文字 `color: rgb(255 255 255);`
- `text-black` 纯黑色文字 `color: rgb(0 0 0);`
- `text-transparent` 透明文字 `color: transparent;`
- 设置文本颜色同时设置透明度
  - `text-blue-600/75` 透明度 `0.75`
  - `text-blue-600/[.06]` 透明度 `0.06`
- 任意值
  - `text-[#50d71e]` <=> `color: #50d71e;`

## 特别注意事项

- `React Native` 不支持在 `Flexbox` 中使用 `gap` 属性, 因此 `NativeWind` 仅在 `Web` 平台上支持 `gap` 属性,
  `android` 或 `iOS` 平台不支持该属性
- 样式无继承, 这一点有别于 `web` 的继承机制, 如字体、文本颜色、行高都无继承, 须手动一一添加样式
- 样式支持程度有限, [Valid style props for react native](https://gist.github.com/prianto/cffcfbb772f9ffb25ff844345215ea99)
- `View` 组件默认开启 `flex`, 但以下几点属性需要特别注意

  - `flex-direction: column;`, 传统 `web` 默认为 `flex-direction: row;`
  - `align-content: flex-start;`, 传统 `web` 默认为 `align-content: stretch;`
  - `flex-shrink: 0;`, 传统 `web` 默认为 `flex-shrink: 1;`

- 文本必须处于 `Text` 组件内, 否则报错:

  ::: warning
  Error: Text strings must be rendered within a <Text> component
  :::

- `display` 属性值只有 `flex` 和 `none`, 不支持 `inline-flex`、`grid` 等属性值
- `position` 属性只支持以下值:

  - `static`
  - `relative`
  - `absolute`

  不支持以下属性值:

  - `fixed`
  - `sticky`

- 不支持渐变色, 可使用

  - [react native linear gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
  - [Expo LinearGradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

- 在 `android` 上不支持负外边距 `nagative margin`
- 以下组件 (`Touchable Components`) 支持 `onPress` 事件属性:

  - `Pressable`
  - `TouchableHighlight`
  - `TouchableOpacity`
  - `TouchableNativeFeedback`
  - `TouchabelWithoutFeedback`

`Text` 组件内文字水平垂直居中:

```tsx
<Text style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>超级居中</Text>
```

上述代码不生效, 须在 `Text` 组件外层包裹 `View`:

```tsx
<View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  <Text style={{textAlign: 'center'}}>超级居中</Text>
</View>
```
