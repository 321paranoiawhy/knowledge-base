# Get Started

## 组件返回多个 `JSX/TSX` 元素

```tsx
// wrong
// export default function MyComponent() {
//   return <button>X</button><button>X</button>;
// }

// right 使用空元素 <></> 包裹
export default function MyComponent() {
  return (
    <>
      <button>X</button>
      <button>X</button>
    </>
  );
}
```
