# 按钮

### 介绍

通过鼠标或键盘输入字符

### 基础用法

```vue
import BasicInput from '../example/BasicInput'
```

```html
<template>
  <fac-input v-model="input" placeholder="请输入..." />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

```

### 禁用用法

```vue
import DisabledInput from '../example/DisabledInput'
```

```html
<template>
  <fac-input v-model="input" disabled placeholder="请输入..." />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### 一键清空

```vue
import ClearableInput from '../example/ClearableInput'
```

```html
<template>
  <fac-input v-model="input" placeholder="请输入..." clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### 密码框

使用`show-password`属性即可得到一个可切换显示隐藏的密码框

```vue
import PasswordInput from '../example/PasswordInput'
```

```html
<template>
  <fac-input
    v-model="input"
    type="password"
    placeholder="请输入密码"
    show-password
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### 带图标的输入框

带有图标标记输入类型

要在输入框中添加图标，你可以简单地使用`prefix-icon`和`suffix-icon`属性。 另外，`prefix`和 `suffix`命名的插槽也能正常工作。

```vue
import IconInput from '../example/IconInput'
```

```html
<template>
  <div>
    <span class="ml-4 w-20 text-666 inline-block">不使用插槽</span>
    <fac-input
      v-model="input1"
      class="w-50 m-2"
      placeholder="Pick a date"
      suffix-icon="calendar-month-outline"
    />
    <fac-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Type something"
      prefix-icon="magnify"
    />
  </div>
  <div>
    <span class="ml-4 w-20 text-666 inline-block">使用插槽</span>
    <fac-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
      <template #suffix>
        <fac-icon name="calendar-month-outline" />
      </template>
    </fac-input>
    <fac-input v-model="input4" class="w-50 m-2" placeholder="Type something">
      <template #prefix>
        <fac-icon name="magnify" />
      </template>
    </fac-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
```

### 文本域

设置文字输入类型的`autosize`属性使得根据内容自动调整的高度。 你可以给`autosize`提供一个包含有最大和最小高度的对象，让输入框自动调整。

```vue
import TextArea from '../example/TextArea.vue'
```

```html
<template>
  <fac-input
    v-model="textarea1"
    type="textarea"
    autosize
    placeholder="请输入..."
  />
  <div style="margin: 20px 0" />
  <fac-input
    v-model="textarea2"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="请输入..."
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const textarea1 = ref('')
const textarea2 = ref('')
</script>
```

### 输入长度限制

使用`maxlength`和`minlength`属性, 来控制输入内容的最大字数和最小字数。 "字符数"使用JavaScript字符串长度来衡量。 为文本或文本输入类型设置`maxlength`prop可以限制输入值的长度。 允许你通过设置 `show-word-limit`到`true`来显示剩余字数。

```vue
import ShowWordLimit from '../example/ShowWordLimit.vue'
```

## API

### 属性

| 参数       | 说明               | 类型    | 可选值                                                | 默认值  | 属性加入版本 |
| ---------- | ------------------ | ------- | ----------------------------------------------------- | ------- | ------------ |
| `type`       | 类型               | _string_  | `text` / `textarea` / `password`   | `text` |              |
| `modelValue / v-model`       | 绑定值               | _string_/ _number_  |            |  |
| `maxlength`      | 最大输入长度     | _string_ / _number_  | -                                                     |    |              |         |
| `show-word-limit`      | 是否显示统计字数, 只在`type`为 'text' 或 'textarea' 的时候生效     | _boolean_ | -                                                     | `false`   |              |
| `placeholder`    | 输入框占位文本   | _string_ | -                                                     |   |              |
| `clearable`   | 是否可清空 | _boolean_ | -                                                     | `false`   |              |
| `disabled`       | 是否禁用     | _boolean_ | -                                                     | `false`   |              |
| `prefix-icon` | 自定义前缀图标           | _string_  | -                                                     | -       |              |
| `suffix-icon`      | 自定义后缀图标           | _string_  | -                                                     | -       |              |
| `autosize`      | textarea 高度是否自适应，仅`type`为 'textarea' 时生效。 可以接受一个对象，比如:`{ minRows: 2, maxRows: 6 }`     | _boolean_ /_object_| -                                                     | `false`   |              |
| `input-style`    | input 元素或 textarea 元素的 style     | _object_ | -                                                     | `{}`   |              |
| `tabindex`     | 输入框的 tabindex     | _string_ / _number_ | -                                                     |     |              |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `blur` | 在 Input 失去焦点时触发 | `event: FocusEvent` |
| `focus` | 在 Input 获得焦点时触发 | `event: FocusEvent` |
| `change` | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 | `(value: string | number)` |
| `input` | 在 Input 值改变时触发 | `(value: string | number)` |
| `在 Input 值改变时触发` | 在点击由`clearable`属性生成的清空按钮时触发 | - |

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| `focus` | 使 Input 获取焦点 | - |
| `blur` | 在 Input 失去焦点时触发 | - |
| `select` | 选中 input 中的文字 | - |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prefix` | 输入框头部内容，只对非`type="textarea"`有效 | `-` |
| `suffix` | 输入框头部内容，只对非`type="textarea"`有效 | `-` |
| `prepend` | 输入框头部内容，只对非`type="textarea"`有效 | `-` |
| `append` | 输入框头部内容，只对非`type="textarea"`有效 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--color-blank` | `#fff` |
| `--input-font-size` | `14px` |
| `--input-bg-color` | `#fff` |
| `--input-border-radius` | `4px` |
| `--input-border-color` | `#dcdfe6` |
| `--transition-box-shadow` | `box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)` |
| `--text-color-placeholder` | `#a8abb2` |
| `--transition-duration` | `0.3s` |
| `--input-height` | `32px` |
| `--input-inner-height` | `calc(var(--input-height, 32px) - 2px)` |
| `--input-text-color` | `#606266` |
| `--disabled-bg-color` | `#f5f7fa` |
| `--disabled-border-color` | `#e4e7ed` |
| `--icon-size` | `16px` |
| `--font-size-base` | `14px` |
