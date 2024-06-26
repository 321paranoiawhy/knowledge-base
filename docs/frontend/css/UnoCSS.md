# UnoCSS Basic

- 类名后加 `!` 表示 `!important`, 如 `c-red!` 表示 `color: red !important;`
- 多个类名前缀一致可合并: `text-16px text-red` -> `text-(16px red)`, `flex flex-col` -> `flex-(~ col)`, [Prefix self-referencing](https://unocss.dev/presets/attributify#prefix-self-referencing)
- 可将多个类名组合成 `shortcuts`: `flex items-center justify-center` -> `super-center`, 可在 `unocss.config.ts` 中配置 `shortcuts`
- 文本溢出显示省略号: `line-clamp-${int}`, 如 `line-clamp-2` 等价于如下 `CSS`:

  ```css
  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  ```

- 背景颜色 `bg-[#000]/40` 等价于 `background-color: rgba(0, 0, 0, 0.4);`
