type ClassName = string | undefined | null
type Classes = (ClassName | [any, ClassName, ClassName?])[]

/**
 * 创建css类的命名空间
 * @param name 组件名
 * @param prefix 组件库前缀
 * @returns
 */
export function createNamespace(name: string, prefix = 'fac') {
  const namespace = `${prefix}-${name}`

  const createBEM = (suffix?: string): string => {
    if (!suffix) return namespace

    return suffix.startsWith('--') ? `${namespace}${suffix}` : `${namespace}__${suffix}`
  }

  const classes = (...classes: Classes): any[] => {
    return classes.map((className) => {
      if (Array.isArray(className)) {
        const [condition, truthy, falsy = null] = className
        return condition ? truthy : falsy
      }

      return className
    })
  }

  return {
    n: createBEM,
    classes,
  }
}

export function supportTouch() {
  const inBrowser = typeof window !== 'undefined'
  return inBrowser && 'ontouchstart' in window
}

export function call<F extends (...arg: any) => any, P extends Parameters<F>>(
  fn?: F | null,
  ...arg: P
): ReturnType<F> | undefined {
  if (fn) return fn(...arg)
}
