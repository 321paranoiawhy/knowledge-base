# 格式化工具

## `prettier`

基本命令:

```bash
npm run prettier . --check
npm run prettier . --write
```

### `XML` 文件支持

- [@prettier/plugin-xml](https://github.com/prettier/plugin-xml)
- [Configuration](https://github.com/prettier/plugin-xml?tab=readme-ov-file#configuration)

```bash
npm install @prettier/plugin-xml -D
```

可运行如下命令:

```bash
npm run prettier . --plugin=@prettier/plugin-xml --write
```

## `clang-format`

- [clang-format docs](https://clang.llvm.org/docs/ClangFormat.html) `clang-format` 官方文档
- [Format your code](https://github.com/facebook/hermes/blob/main/doc/CodingStandards.md#format-your-code) `React Native` 推荐使用 `clang-format` 工具格式化代码
- [.clang-format](https://github.com/facebook/hermes/blob/main/.clang-format) `React Native` 官方仓库 `.clang-format` 文件参考
- [Using clang-format on C++ Code](https://www.electronjs.org/docs/latest/development/clang-format)

`clang-format` 可格式化以下代码文件:

- `C`
- `C++`
- `Java`
- `JavaScript`
- `JSON`
- `Objective-C`
- `Protobuf`
- `C#`

这里仅须对 `java` 文件格式化

如何支持 `kotlin`、`Swift`、`xml` 等文件格式化?

安装 `clang-format`, 该包由 `Angular` 团队开发和维护:

```bash
npm i clang-format -D
```

```bash
# 输出格式化后的代码, 但不修改源文件
npm run clang-format --glob=**/android/src/main/java/**/*.java

# 格式化并修改源文件
npm run clang-format -i --glob=**/android/src/main/java/**/*.java
```

### 配置属性说明

```yaml
---
# 语言: None, Cpp, Java, JavaScript, ObjC, Proto, TableGen, TextProto
Language: Cpp
# BasedOnStyle:	LLVM
# 访问说明符 (public、private等) 的偏移
AccessModifierOffset: -4
# 开括号(开圆括号、开尖括号、开方括号)后的对齐: Align, DontAlign, AlwaysBreak(总是在开括号后换行)
AlignAfterOpenBracket: Align
# 连续赋值时, 对齐所有等号
AlignConsecutiveAssignments: true
# 连续声明时, 对齐所有声明的变量名
AlignConsecutiveDeclarations: true
# 左对齐逃脱换行(使用反斜杠换行)的反斜杠
AlignEscapedNewlinesLeft: true
# 水平对齐二元和三元表达式的操作数
AlignOperands: true
# 对齐连续的尾随的注释
AlignTrailingComments: true
# 允许函数声明的所有参数在放在下一行
AllowAllParametersOfDeclarationOnNextLine: true
# 允许短的块放在同一行
AllowShortBlocksOnASingleLine: false
# 允许短的 case 标签放在同一行
AllowShortCaseLabelsOnASingleLine: false
# 允许短的函数放在同一行: None, InlineOnly(定义在类中), Empty(空函数), Inline(定义在类中, 空函数), All
AllowShortFunctionsOnASingleLine: Empty
# 允许短的 if 语句保持在同一行
AllowShortIfStatementsOnASingleLine: false
# 允许短的循环保持在同一行
AllowShortLoopsOnASingleLine: false
# 总是在定义返回类型后换行 (deprecated)
AlwaysBreakAfterDefinitionReturnType: None
# 总是在返回类型后换行: None, All, TopLevel(顶级函数, 不包括在类中的函数),
#   AllDefinitions(所有的定义, 不包括声明), TopLevelDefinitions(所有的顶级函数的定义)
AlwaysBreakAfterReturnType: None
# 总是在多行string字面量前换行
AlwaysBreakBeforeMultilineStrings: false
# 总是在 template 声明后换行
AlwaysBreakTemplateDeclarations: false
# false 表示函数实参要么都在同一行, 要么都各自一行
BinPackArguments: true
# false 表示所有形参要么都在同一行, 要么都各自一行
BinPackParameters: true
# 大括号换行, 只有当 BreakBeforeBraces 设置为 Custom 时才有效
BraceWrapping:
  # class定义后面
  AfterClass: false
  # 控制语句后面
  AfterControlStatement: false
  # enum定义后面
  AfterEnum: false
  # 函数定义后面
  AfterFunction: false
  # 命名空间定义后面
  AfterNamespace: false
  # ObjC定义后面
  AfterObjCDeclaration: false
  # struct定义后面
  AfterStruct: false
  # union定义后面
  AfterUnion: false
  # catch之前
  BeforeCatch: true
  # else之前
  BeforeElse: true
  # 缩进大括号
  IndentBraces: false
# 在二元运算符前换行: None(在操作符后换行), NonAssignment(在非赋值的操作符前换行), All(在操作符前换行)
BreakBeforeBinaryOperators: NonAssignment
# 在大括号前换行: Attach(始终将大括号附加到周围的上下文), Linux(除函数、命名空间和类定义, 与Attach类似),
# Mozilla(除枚举、函数、记录定义, 与 Attach 类似), Stroustrup(除函数定义、catch、else, 与Attach类似),
# Allman(总是在大括号前换行), GNU(总是在大括号前换行, 并对于控制语句的大括号增加额外的缩进), WebKit(在函数前换行), Custom
# 注：这里认为语句块也属于函数
BreakBeforeBraces: Custom
# 在三元运算符前换行
BreakBeforeTernaryOperators: true
# 在构造函数的初始化列表的逗号前换行
BreakConstructorInitializersBeforeComma: false
# 每行字符的限制, 0 表示没有限制
ColumnLimit: 200
# 描述具有特殊意义的注释的正则表达式, 它不应该被分割为多行或以其它方式改变
CommentPragmas: '^ IWYU pragma:'
# 构造函数的初始化列表要么都在同一行, 要么都各自一行
ConstructorInitializerAllOnOneLineOrOnePerLine: false
# 构造函数的初始化列表的缩进宽度
ConstructorInitializerIndentWidth: 4
# 延续的行的缩进宽度
ContinuationIndentWidth: 4
# 去除 C++11 的列表初始化的大括号{后和}前的空格
Cpp11BracedListStyle: false
# 继承最常用的指针和引用的对齐方式
DerivePointerAlignment: false
# 关闭格式化
DisableFormat: false
# 自动检测函数的调用和定义是否被格式为每行一个参数(Experimental)
ExperimentalAutoDetectBinPacking: false
# 需要被解读为 foreach 循环而不是函数调用的宏
ForEachMacros: [foreach, Q_FOREACH, BOOST_FOREACH]
# 对 #include 进行排序, 匹配了某正则表达式的#include拥有对应的优先级, 匹配不到的则默认优先级为INT_MAX(优先级越小排序越靠前),
#   可以定义负数优先级从而保证某些#include永远在最前面
IncludeCategories:
  - Regex: '^"(llvm|llvm-c|clang|clang-c)/'
    Priority: 2
  - Regex: '^(<|"(gtest|isl|json)/)'
    Priority: 3
  - Regex: '.*'
    Priority: 1
# 缩进 case 标签
IndentCaseLabels: false
# 缩进宽度
IndentWidth: 4
# 函数返回类型换行时, 缩进函数声明或函数定义的函数名
IndentWrappedFunctionNames: false
# 保留在块开始处的空行
KeepEmptyLinesAtTheStartOfBlocks: true
# 开始一个块的宏的正则表达式
MacroBlockBegin: ''
# 结束一个块的宏的正则表达式
MacroBlockEnd: ''
# 连续空行的最大数量
MaxEmptyLinesToKeep: 1
# 命名空间的缩进: None, Inner(缩进嵌套的命名空间中的内容), All
NamespaceIndentation: Inner
# 使用 ObjC 块时缩进宽度
ObjCBlockIndentWidth: 4
# 在 ObjC 的 @property 后添加一个空格
ObjCSpaceAfterProperty: false
# 在 ObjC 的 protocol 列表前添加一个空格
ObjCSpaceBeforeProtocolList: true
# 在 call(后对函数调用换行的 penalty)
PenaltyBreakBeforeFirstCallParameter: 19
# 在一个注释中引入换行的 penalty
PenaltyBreakComment: 300
# 第一次在 << 前换行的 penalty
PenaltyBreakFirstLessLess: 120
# 在一个字符串字面量中引入换行的 penalty
PenaltyBreakString: 1000
# 对于每个在行字符数限制之外的字符的 penalty
PenaltyExcessCharacter: 1000000
# 将函数的返回类型放到它自己的行的 penalty
PenaltyReturnTypeOnItsOwnLine: 60
# 指针和引用的对齐: Left, Right, Middle
PointerAlignment: Left
# 允许重新排版注释
ReflowComments: true
# 允许排序 #include
SortIncludes: true
# 在C风格类型转换后添加空格
SpaceAfterCStyleCast: false
# 在赋值运算符之前添加空格
SpaceBeforeAssignmentOperators: true
# 开圆括号之前添加一个空格: Never, ControlStatements, Always
SpaceBeforeParens: ControlStatements
# 在空的圆括号中添加空格
SpaceInEmptyParentheses: false
# 在尾随的评论前添加的空格数(只适用于//)
SpacesBeforeTrailingComments: 2
# 在尖括号的<后和>前添加空格
SpacesInAngles: true
# 在容器(ObjC 和 JavaScript 的数组和字典等)字面量中添加空格
SpacesInContainerLiterals: true
# 在 C 风格类型转换的括号中添加空格
SpacesInCStyleCastParentheses: true
# 在圆括号的(后和)前添加空格
SpacesInParentheses: true
# 在方括号的[后和]前添加空格, lambda 表达式和未指明大小的数组的声明不受影响
SpacesInSquareBrackets: true
# 标准: Cpp03, Cpp11, Auto
Standard: Cpp11
# tab 宽度
TabWidth: 4
# 使用 tab 字符: Never, ForIndentation, ForContinuationAndIndentation, Always
UseTab: Never
```

### 配置文件

`clang-format` 配置文件为 `.clang-format`

使用 `BasedOnStyle`:

```.clang-format
---
Language:        JavaScript
BasedOnStyle:    Google
ColumnLimit:     100
```

或针对每一个属性单独配置, 此时配置文件会显得较为冗长

## `spotless`

- [spotless](https://github.com/diffplug/spotless)
