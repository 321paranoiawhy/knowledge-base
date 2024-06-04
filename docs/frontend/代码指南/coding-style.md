# Coding Style 编码风格

## Reference

- [Kotlin Coding conventions](https://kotlinlang.org/docs/coding-conventions.html)

## 前置知识

### 命名风格

有三种最为常见的命名风格:

- `Camel Case`, 驼峰命名, 有大驼峰和小驼峰之分,
  大驼峰各单词首字母均大写, 小驼峰除第一个单词首字母小写外其余单词首字母均大写,
  大驼峰示例 `CamelCase`, 小驼峰示例 `camelCase`
  常见于 `JavaScript` 中
- `Snake Case`, 蛇形命名, 各单词均小写, 以下划线 `_` 连接, 示例 `snake_case`, 常见于 `python` 中
- `Kebab Case`, 烤肉串命名, 各单词均小写, 以中横线 `-` 连接, 示例 `kebab-case`

参考:

- [常見重點整理 - 命名慣例 & 開發時注意事項](https://hackmd.io/@Heidi-Liu/note-common)

## 空行和注释

- 应适当空行以提高代码可阅读性
- 代码尽可能自注释
- 必要之处书写注释, 不书写无效或假注释
- 尽可能减少单词拼写错误, `VS Code` 可安装 `Code Spell Checker`

## 代码格式化

使用 `prettier` 进行代码格式化:

- 手动对某文件执行格式化, 右键并点击 `Reformat with Prettier`
- 配置 `Format on Save`, 文件保存时自动格式化
- `packages.json` 配置的全局文件格式化命令 (**须慎用**)

  ```bash
  pnpm prettier
  ```

- `husky + lint-staged` 对暂存区文件代码格式化

## 命名风格

- 严禁使用拼音或数字命名, 命名可长不可短, 尽可能表意明确且清晰

  ```js
  // bad
  const shuzi = 1; // 中文数字拼音命名
  const str1 = 'str1';

  // good
  const number = 1;
  const str = 'str';
  ```

- 允许使用众所周知的英文单词缩写, 不推荐使用自创缩写

  ```js
  // bad, KBF 缩写过于小众
  const isKBF = false;
  // good, 众所周知 SVIP 为超级会员缩写
  const isSVIP = false;
  ```

- 变量名和函数名使用小驼峰命名, 尽可能见文知意, 符合语义化
- 常量或环境变量使用蛇形命名且所有字符均大写, 正确示例: `BASE_API_URL`

## 类型安全和校验

- **永不相信**后端接口返回的数据及类型

  前端层面须做好类型校验和默认值处理, 以避免数据问题导致界面白屏等,
  可多使用可选链 `?.`, 三元表达式 `true ? true : false`, 空值合并运算符 `??`, 逻辑空赋值 `??=`,
  逻辑或运算符 `||`, 逻辑或赋值 `||=`
