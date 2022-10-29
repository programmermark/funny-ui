import { PropType } from 'vue'

export const mutable = <T extends readonly any[] | Record<string, unknown>>(
  val: T
) => val as Mutable<typeof val>
export type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export const definePropType = <T>(val: any): PropType<T> => val
