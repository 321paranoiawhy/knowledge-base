# TypeScript

基本用法:

```ts
// 数字类型
// 也可不声明类型, 其类型交由 TS 自动推断
// const num = 1; // TS 自动推断出类型为 number
const num: number = 1;
// 字符串类型
const str: string = 'string';
// 布尔值类型
const bool: boolean = true;
// null
const aNull: null = null;
// undefined
const anUndefined: undefined = undefined;
// 对象
const obj: object = {};
// 数组
// 或者使用 Array<number>
const arr: number[] = [1, 2, 3];
```

## any

## unknown

## never

## void

`void` 通常用于声明函数返回值类型, 表示没有返回值, 隐式返回 `undefined`:

```ts
function save(): void {
  console.log('success');
}
```

也常用 `void 0` 以代替 `undefined`:

```ts
return void 0;
```

## infer

## extends

## implements

## as

## 工具函数

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

### Partial

`Partial` 将所有属性变为可选属性:

```ts
interface Todo {
  title: string;
  description: string;
}

// title 和 description 均变为可选属性
type TPartialTodo = Partial<Todo>;
```

### Required

`Required` 将所有属性变为必须属性:

```ts
interface Todo {
  title?: string;
  description?: string;
}

// title 和 description 均变为必须属性
type TRequiredTodo = Required<Todo>;
```

### Readonly

### Record

### Pick

### Omit

### Exclude

### Extract

### ReturnType

### InstanceType

## type

```ts
type TAnimation = 'ease-in' | 'ease-out';
```

## interface

```ts
interface Person {
  // 必须属性
  name: string;
  // 可选属性
  age?: number;
  sex?: string;
  // 只读属性
  readonly birthday: Date;
}
```

## enum

```ts
// 命名以 Enum 结尾
enum FruitEnum {
  APPLE = '苹果',
  ORANGE = '橘子',
  BANNER = '香蕉'
}
```

## namespace 与 module
