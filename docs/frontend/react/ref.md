# React Ref

在 `React Class Component` 中可以使用 `this` 获取组件实例,
而在 `React Functional Component` 中则须使用 `useRef` 等 `hook`

## `useRef`

```tsx
export function App() {
  const ref = useRef<HTMLInputElement>();

  return (
    <>
      <input ref={ref} />
      <button onClick={() => ref?.current?.focus()}></button>
    </>
  );
}
```

## `useImperativeHandle`

`useImperativeHandle` 类似 `Vue 3` 中的 `defineExpose`, 仅暴露组件实例必要的属性或方法

```tsx
const TextInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  // 关键代码
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef?.current?.focus();
    }
  }));
  return <input ref={inputRef} />;
});

export function TextInputWithFocusButton() {
  // 关键代码
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // 关键代码, `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl?.current?.focus();
  };
  return (
    <>
      // 关键代码
      <TextInput ref={inputEl}></TextInput>
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```
