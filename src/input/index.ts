// Component entry, the folder where the file exists will be exposed to the user
import Input from './Input.vue'
import type { App } from 'vue'

Input.install = function(app: App) {
  app.component(Input.name, Input)
}

export const _InputComponent = Input

export default Input
