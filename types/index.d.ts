import type { App } from 'vue'

export const install: (app: App) => void

export * from './basicComponent'
export * from './button'
export * from './icon'
export * from './input'
export * from './locale'
export * from './ripple'
export * from './space'

declare module 'vue' {
  export interface GlobalComponents {
    VarBasicComponent: typeof import('@funny-ui/ui')['_BasicComponentComponent']
    VarButton: typeof import('@funny-ui/ui')['_ButtonComponent']
    VarIcon: typeof import('@funny-ui/ui')['_IconComponent']
    VarInput: typeof import('@funny-ui/ui')['_InputComponent']
    VarLocale: typeof import('@funny-ui/ui')['_LocaleComponent']
    VarRipple: typeof import('@funny-ui/ui')['_RippleComponent']
    VarSpace: typeof import('@funny-ui/ui')['_SpaceComponent']
  }
}
