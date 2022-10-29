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
    VarBasicComponent: typeof import('facilely-ui')['_BasicComponentComponent']
    VarButton: typeof import('facilely-ui')['_ButtonComponent']
    VarIcon: typeof import('facilely-ui')['_IconComponent']
    VarInput: typeof import('facilely-ui')['_InputComponent']
    VarLocale: typeof import('facilely-ui')['_LocaleComponent']
    VarRipple: typeof import('facilely-ui')['_RippleComponent']
    VarSpace: typeof import('facilely-ui')['_SpaceComponent']
  }
}
