export interface CacheInstance<T> {
  cache: T[]

  has(key: T): boolean

  add(key: T): void

  remove(key: T): void

  clear(): void
}

export const isHTMLSupportImage = (val: string | undefined | null) => {
  if (val == null) {
    return false
  }

  return (
    val.startsWith('data:image') || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(val)
  )
}

export const isHTMLSupportVideo = (val: string | undefined | null) => {
  if (val == null) {
    return false
  }

  return val.startsWith('data:video') || /\.(mp4|webm|ogg)$/.test(val)
}

export const createCache = <T>(max: number): CacheInstance<T> => {
  const cache: T[] = []

  return {
    cache,

    has(key: T) {
      return this.cache.includes(key)
    },

    add(key: T) {
      if (this.has(key)) {
        return
      }

      this.cache.length === max && cache.shift()
      this.cache.push(key)
    },

    remove(key: T) {
      this.has(key) && removeItem(this.cache, key)
    },

    clear() {
      this.cache.length = 0
    },
  }
}

export const linear = (value: number): number => value

export const cubic = (value: number): number => value ** 3

export const easeInOutCubic = (value: number): number =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2

export const dt = (value: unknown, defaultText: string | undefined) =>
  value == null ? defaultText : value

export const getGlobalThis = (): typeof globalThis => {
  if (typeof globalThis !== 'undefined') return globalThis

  if (typeof window !== 'undefined') return window

  return typeof global !== 'undefined' ? global : self
}

export const padStart = (
  str = '',
  maxLength: number,
  fillString = ''
): string => {
  if (str.length >= maxLength) return str

  const len = maxLength - str.length
  const repeatCount = Math.floor(len / fillString.length)

  return (
    fillString.repeat(repeatCount) +
    fillString.slice(0, len % fillString.length) +
    str
  )
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBoolean = (val: unknown): val is boolean =>
  typeof val === 'boolean'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isPlainObject = (val: unknown): val is Record<string, any> =>
  Object.prototype.toString.call(val) === '[object Object]'

export const isObject = (val: unknown): val is Record<string, any> =>
  typeof val === 'object' && val !== null

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)

export const isURL = (val: string | undefined | null) => {
  if (!val) {
    return false
  }

  return /^(http)|(\.*\/)/.test(val)
}

export const isEmpty = (val: unknown) =>
  val === undefined ||
  val === null ||
  val === '' ||
  (Array.isArray(val) && !val.length)

export const toNumber = (
  val: number | string | boolean | undefined | null
): number => {
  if (val == null) return 0

  if (isString(val)) {
    val = parseFloat(val)
    val = Number.isNaN(val) ? 0 : val
    return val
  }

  if (isBoolean(val)) return Number(val)

  return val
}

export const removeItem = (arr: Array<unknown>, item: unknown) => {
  if (arr.length) {
    const index: number = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

export const toggleItem = (arr: Array<unknown>, item: unknown) => {
  arr.includes(item) ? removeItem(arr, item) : arr.push(item)
}

export const throttle = (method: any, mustRunDelay = 200): (() => void) => {
  let timer: number
  let start = 0

  return function loop(this: unknown, ...args) {
    const now = Date.now()
    const elapsed = now - start

    if (!start) {
      start = now
    }

    if (timer) {
      window.clearTimeout(timer)
    }

    if (elapsed >= mustRunDelay) {
      method.apply(this, args)
      start = now
    } else {
      timer = window.setTimeout(() => {
        loop.apply(this, args)
      }, mustRunDelay - elapsed)
    }
  }
}

export const inBrowser = () => typeof window !== 'undefined'

export const uniq = (arr: Array<any>) => [...new Set(arr)]

export const bigCamelize = (s: string): string =>
  camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase())

export const camelize = (s: string): string =>
  s.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())

export const kebabCase = (s: string): string => {
  const ret = s.replace(/([A-Z])/g, ' $1').trim()
  return ret.split(' ').join('-').toLowerCase()
}

export const isKorean = (text: string) =>
  /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text)
