import { BasicComponent, BasicAttributes } from './basicComponent'

export type InputValidateTrigger =
  | 'onFocus'
  | 'onBlur'
  | 'onChange'
  | 'onClick'
  | 'onClear'
  | 'onInput'

export type InputType = 'text' | 'password' | 'number' | 'tel' | 'email'

export interface InputProps extends BasicAttributes {
  modelValue?: string
  type?: InputType
  maxlength?: string | number
  placeholder?: string
  clearable?: boolean
  disabled?: boolean
  showPassword?: boolean
  showWordLimit?: boolean
  suffixIcon?: string
  prefixIcon?: string
  inputStyle?: string[] | string | Record<string, unknown>
  resize?: ['none', 'both', 'horizontal', 'vertical']
  autosize?: boolean | Record<string, unknown>
  autocomplete?: 'off'
  tabindex?: string | number
  containerRole?: string

  onFocus?: (e: FocusEvent) => void
  onBlur?: (e: FocusEvent) => void
  onChange?: (value: string) => void
  onInput?: (value: string) => void
  'onUpdate:modelValue'?: (value: string) => void
}

export class Input extends BasicComponent {
  $props: InputProps

  focus(): void

  blur(): void

  select(): void
}

export class _InputComponent extends Input {}
