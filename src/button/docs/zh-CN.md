# 按钮

### 介绍

按钮组件，用于触发操作

### 主题色按钮

```vue
import ThemeButton from '../example/ThemeButton'
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

### 块级按钮

```vue
import BlockButton from '../example/BlockButton.vue'
```

```html
<template>
  <fac-button block type="primary">块级按钮</fac-button>
</template>
```

### 自定义颜色

```vue
import ModifyColor from '../example/ModifyColor.vue'
```

```html
  <template>
    <fac-space :size="[10, 10]">
      <fac-button color="#69dbaa" text-color="#eee">背景/颜色</fac-button>
      <fac-button 
        color="linear-gradient(to right, #69dbaa, #3a7afe)"
        text-color="#fff"
      >
        使用渐变
      </fac-button>
    </fac-space>
  </template>
```

### 圆形按钮

```vue
import RoundButton from '../example/RoundButton.vue'
```

```html
<template>
  <fac-space :size="[10, 10]">
    <fac-button type="primary" round>
      <fac-icon name="plus" />
    </fac-button>
    <fac-button type="info" round>
      <fac-icon name="information" />
    </fac-button>
    <fac-button type="success" round>
      <fac-icon name="check" />
    </fac-button>
    <fac-button type="warning" round>
      <fac-icon name="warning" />
    </fac-button>
    <fac-button type="danger" round>
      <fac-icon name="window-close" />
    </fac-button>
  </fac-space>
</template>
```

## API

### 属性

| 参数       | 说明               | 类型    | 可选值                                                | 默认值  | 属性加入版本 |
| ---------- | ------------------ | ------- | ----------------------------------------------------- | ------- | ------------ |
| `type`       | 类型               | _string_  | `default` / `primary` / `info` / `success` / `warning` / `danger` | `default` |              |
| `size`       | 尺寸               | _string_  | `normal` / `mini` / `small` / `large`                         | `normal`  |
| `block`      | 是否是块级按钮     | _boolean_ | -                                                     | `false`   |              |         |
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

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--button-default-color` | `#f5f5f5` |
| `--button-primary-color` | `var(--color-primary)`|
| `--button-danger-color` |  `var(--color-danger)`|
| `--button-success-color` | `var(--color-success)`|
| `--button-warning-color` |  `var(--color-warning)`|
| `--button-info-color` | `var(--color-info)`|
| `--button-disabled-color` | `var(--color-disabled)`|
| `--button-disabled-text-color` | `var(--color-text-disabled)` |
| `--button-border-radius` | `4px` |
| `--button-mini-padding` | `0 9px` |
| `--button-small-padding` | `0 11px` |
| `--button-normal-padding` | `0 15px` |
| `--button-large-padding` | `0 22px` |
| `--button-round-padding` | `6px` |
| `--button-mini-height` | `20px` |
| `--button-small-height` | `28px` |
| `--button-normal-height` | `36px` |
| `--button-large-height` | `44px` |