# 快速开始

### 介绍

这里为您介绍常见开发模式下接入组件库的最基本方式。

### 安装

#### CDN
`@funny-ui/ui.js` 包含组件库的所有样式和逻辑, 引入即可。

```html
<!-- playground-ignore -->
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
<script src="https://cdn.jsdelivr.net/npm/@funny-ui/ui/umd/varlet.js"></script>
<script>
  import * as FunnyUi from "@funny-ui/ui";

  const app = Vue.createApp({
    template: '<fac-button>按钮</fac-button>'
  })
  app.use(FunnyUi).mount('#app')
</script>
```

#### Webpack/Vite（全量引入）

```shell
# playground-ignore
# 通过 npm、yarn 或 pnpm 安装

# npm
npm i @funny-ui/ui -S

# yarn
yarn add @funny-ui/ui

# pnpm
pnpm add @funny-ui/ui
```

```js
// playground-ignore
import App from './App.vue'
import FunnyUi from '@funny-ui/ui'
import { createApp } from 'vue'
import "@funny-ui/ui/es/style.js";

createApp(App).use(FunnyUi).mount('#app')
```

