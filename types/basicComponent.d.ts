import type { App } from 'vue'

export class BasicComponent {
  static name: string

  static install(app: App): void
}

export interface BasicAttributes {
  class?: string | Record<string, any>
  style?: string | Record<string, any>
}
