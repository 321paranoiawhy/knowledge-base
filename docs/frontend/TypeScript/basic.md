# TypeScript Basic

## 解构赋值时声明类型

`js` 写法:

```js
const {name, age} = personInfo;
```

错误的 `ts` 写法:

```ts
const {name: string, age: number} = personInfo;
```

上述写法中实际上不是声明类型, 而是解构赋值的别名, 将 `name` 属性解构赋值给 `string` 变量, `nageame` 属性解构赋值给 `number` 变量

正确写法:

```ts
const {name, age}: {name: string; age: number} = personInfo;
```

或:

```ts
type TPerson = {
  name: string;
  age: number;
};

const {name1, age1}: TPerson = personInfo;
const {name2, age2} = personInfo as TPerson;
```
