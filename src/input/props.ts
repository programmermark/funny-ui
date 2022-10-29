import { PropType, StyleValue } from 'vue'
import { definePropType, mutable } from './types'

export type InputAutoSize = { minRows?: number; maxRows?: number } | boolean

export const props = {
  /** 输入框值，通过v-model双向绑定 */
  modelValue: {
    type: String || Number,
    default: '',
  },
  type: {
    type: String as PropType<'text' | 'password' | 'textarea'>,
    default: 'text',
    validator: (type: string) =>
      ['text', 'password', 'textarea'].includes(type),
  },
  maxlength: {
    type: [String, Number],
  },
  placeholder: {
    type: String,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  suffixIcon: {
    type: String,
  },
  prefixIcon: {
    type: String,
  },
  inputStyle: {
    type: definePropType<StyleValue>([Object, Array, String]),
    default: () => mutable({} as const),
  },
  resize: {
    type: String,
    values: ['none', 'both', 'horizontal', 'vertical'],
  },
  autosize: {
    type: definePropType<InputAutoSize>([Boolean, Object]),
    default: false,
  },
  /** 原生属性 */
  autocomplete: {
    type: String,
    default: 'off',
  },
  /** 原生属性，tabindex 属性规定元素的 tab 键控制次序（当 tab 键用于导航时）。 */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  containerRole: {
    type: String,
    default: undefined,
  },
}
