# 按需引入

### 介绍

按需引入避免了组件的全量导入，可以有效的减少发布包的大小。

### 手动引入

每一个组件都是一个 `Vue插件`，并由 `组件逻辑` 和 `样式文件` 组成，手动引入的使用方式如下。

```js
// playground-ignore
import { createApp } from 'vue'
import { Button } from 'facilely-ui/ui'
import 'facilely-ui/es/button/style/index.js'

createApp().use(Button)
```

或

```html
// playground-ignore
<script setup>
import { Button as FacButton } from 'facilely-ui/ui'
import 'facilely-ui/es/button/style/index.js'
</script>

<template>
  <fac-button>hello world</fac-button>
</template>
```

### 自动引入

通过插件
[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 和 
[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
实现组件自动按需导入，将不再需要在`main.ts`中引入组件库和组件库样式。

去除全量引入代码：

```js
// playground-ignore
import App from './App.vue'
// import FacilelyUi from 'facilely-ui'
import { createApp } from 'vue'
// mport "facilely-ui/es/style.js";

// createApp(App).use(FacilelyUi).mount('#app')
createApp(App).mount('#app')
```

按需引入代码：

```shell
# playground-ignore
# 安装插件

# npm
npm i unplugin-vue-components unplugin-auto-import facilely-resolver -D

# yarn
yarn add unplugin-vue-components unplugin-auto-import facilely-resolver -D

# pnpm
pnpm add unplugin-vue-components unplugin-auto-import facilely-resolver -D
```

#### Vite

```js
// playground-ignore
// vite.config.js
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { FacilelyUIResolver } from 'facilely-resolver'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [FacilelyUIResolver()]
    }),
    autoImport({
      resolvers: [FacilelyUIResolver({ autoImport: true })]
    })
  ]
})
```

#### Typescript 配置注意

为了得到良好的 IDE 语法高亮，请确保上述两个插件生成的类型声明文件被 `typescript` 识别，可在 `tsconfig.json` 中进行如下配置

```json
// playground-ignore
{
  "include": ["auto-imports.d.ts", "components.d.ts"]
}
```

### 手动引入和自动引入对比

手动引入

```html
// playground-ignore
<script setup>
import { Button as FacButton } from 'facilely-ui'
import 'facilely-ui/es/button/style/index.js'

function handleClick() {
  alert('你好!')
}
</script>

<template>
  <fac-button @click="handleClick">说你好</fac-button>
</template>
```

自动引入

```html
// playground-ignore
<script setup>
function handleClick() {
  alert('你好!')
}
</script>

<template>
  <fac-button @click="handleClick">说你好</fac-button>
</template>
```