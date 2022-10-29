# 按钮

### Intro

Button component for triggering actions

### Theme Color Button

```vue
import ModifyColor from '../example/ModifyColor'
```

```html
<template>
  <fac-space :size="[10, 10]">
    <fac-button>默认按钮</fac-button>
    <fac-button type="primary">主要按钮</fac-button>
    <fac-button type="info">信息按钮</fac-button>
    <fac-button type="success">成功按钮</fac-button>
    <fac-button type="warning">警告按钮</fac-button>
    <fac-button type="danger">危险按钮</fac-button>
  </fac-space>
</template>
```

### 文字按钮

```vue
import TextButton from '../example/TextButton'
```

```html
<template>
  <fac-space :size="[10, 10]">
    <fac-button text outline type="primary">外边框按钮</fac-button>
    <fac-button text type="primary">纯文字按钮</fac-button>
  </fac-space>
</template>
```

### 禁用状态

```vue
import DisabledButton from '../example/DisabledButton.vue'
```

```html
<template>
  <fac-space :size="[10, 10]">
    <fac-button disabled>禁用状态</fac-button>
    <fac-button disabled text outline>禁用状态</fac-button>
    <fac-button disabled text>禁用状态</fac-button>
  </fac-space>
</template>
```

### 按钮尺寸

```vue
import ButtonSize from '../example/ButtonSize.vue'
```

```html
<template>
  <fac-space :size="[10, 10]">
    <fac-button type="primary">常规按钮</fac-button>
    <fac-button type="success" size="small">小型按钮</fac-button>
    <fac-button type="warning" size="mini">迷你按钮</fac-button>
    <fac-button type="danger" size="large">大型按钮</fac-button>
  </fac-space>
</template>
```

## API

### 属性

| 参数       | 说明               | 类型    | 可选值                                                | 默认值  | 属性加入版本 |
| ---------- | ------------------ | ------- | ----------------------------------------------------- | ------- | ------------ |
| `type`       | 类型               | _string_  | `default` / `primary` / `info` / `success` / `warning` / `danger` | `default` |              |
| `size`       | 尺寸               | _string_  | `normal` / `mini` / `small` / `large`                         | `normal`  |              |
| `circle`      | 是否是圆形按钮     | _boolean_ | -                                                     | `false`   |              |
| `loading`    | 是否为加载中状态   | _boolean_ | -                                                     | `false`   |              |
| `disabled`   | 按钮是否为禁用状态 | _boolean_ | -                                                     | `false`   |              |
| `text`       | 是否是文字按钮     | _boolean_ | -                                                     | `false`   |              |
| `text-color` | 文字颜色           | _string_  | -                                                     | -       |              |
| `color`      | 背景颜色           | _string_  | -                                                     | -       |              |
| `round`      | 是否为圆角按钮     | _boolean_ | -                                                     | `false`   |              |
| `outline`    | 是否使用外边框     | _boolean_ | -                                                     | `false`   |              |
| `ripple`     | 是否使用水波纹     | _boolean_ | -                                                     | `true`    |              |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |
