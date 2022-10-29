# 快速开始

### 介绍

这里为您介绍常见开发模式下接入组件库的最基本方式。

### 安装

#### CDN
`facilely-ui.js` 包含组件库的所有样式和逻辑, 引入即可。

```html
<!-- playground-ignore -->
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
<script src="https://cdn.jsdelivr.net/npm/facilely-ui/umd/varlet.js"></script>
<script>
  import * as FacilelyUi from "facilely-ui";

  const app = Vue.createApp({
    template: '<fac-button>按钮</fac-button>'
  })
  app.use(FacilelyUi).mount('#app')
</script>
```

#### Webpack/Vite（全量引入）

```shell
# playground-ignore
# 通过 npm、yarn 或 pnpm 安装

# npm
npm i facilely-ui -S

# yarn
yarn add facilely-ui

# pnpm
pnpm add facilely-ui
```

```js
// playground-ignore
import App from './App.vue'
import FacilelyUi from 'facilely-ui'
import { createApp } from 'vue'
import "facilely-ui/es/style.js";

createApp(App).use(FacilelyUi).mount('#app')
```

