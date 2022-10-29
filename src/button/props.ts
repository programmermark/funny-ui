import { PropType } from 'vue'

/**
 * 校验button type
 * @param type button type
 * @returns
 */
function typeValidator(type: string): boolean {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

/**
 * 校验button size
 * @param type button size
 * @returns
 */
function sizeValidator(type: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(type)
}

export const props = {
  type: {
    type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
    default: 'default',
    validator: typeValidator,
  },
  size: {
    type: String as PropType<'normal' | 'mini' | 'small' | 'large'>,
    default: 'normal',
    validator: sizeValidator,
  },
  block: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  // loading: {
  //   type: Boolean,
  //   default: false,
  // },
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
  },
  color: {
    type: String,
  },
  round: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  onClick: {
    type: Function as PropType<(e: Event) => void | Promise<any>>,
  },
  onTouchstart: {
    type: Function as PropType<(e: Event) => void | Promise<any>>,
  },
}
