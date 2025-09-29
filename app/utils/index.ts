// 类型守卫：判断是否为普通对象
function isObject(obj: unknown): obj is Record<string, unknown> {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
}

// 强类型守卫：确保 key 是 obj 的合法属性，并触发类型收缩
function hasProperty<T extends Record<string, unknown>>(obj: T, prop: string | number | symbol): prop is keyof T {
  return typeof prop === 'string' && Object.prototype.hasOwnProperty.call(obj, prop)
}

// 判断是否存在key
function hasKey<T extends object>(obj: T, key: string | number | symbol): key is keyof T {
  return key in obj
}

// 对象赋值: 只针对target中存在的key赋值
export function objCopy<T extends object>(target: T, source: unknown): object {
  if (!source || typeof source !== 'object') return {}
  for (const [key, value] of Object.entries(source)) {
    if (hasKey(target, key)) {
      target[key as keyof T] = value as T[keyof T]
    }
  }
  return target
}

// 从 target 对象中安全获取嵌套路径的值
export function getVal<T = unknown>(target: unknown, path: string, defaultValue?: T): T | unknown {
  if (!isObject(target)) return defaultValue

  const keys = path.split('.').filter(Boolean)
  let result: unknown = target

  for (const key of keys) {
    if (!isObject(result)) return defaultValue
    if (!hasProperty(result, key)) return defaultValue
    result = result[key]
  }

  return result as T
}

// 递归提取结构
export function getObj<T>(source: unknown, template: T): T {
  // 如果 source 不是对象，直接返回 template
  if (!isObject(source)) return template

  // 如果 template 是基本类型，直接返回 source（类型匹配）或 template
  if (!isObject(template)) {
    if (source !== undefined && typeof source === typeof template) return source as T
    return template
  }

  const result = {} as Record<string, unknown>

  // 遍历 template 的每个键
  for (const [key, hopeVal] of Object.entries(template)) {
    const item = (source as Record<string, unknown>)[key]

    if (JSON.stringify(hopeVal) !== '{}' && isObject(hopeVal)) {
      // 递归：继续提取嵌套结构
      result[key] = getObj(item, hopeVal)
    } else {
      // 强制转换相同类型,
      if (item) {
        switch (typeof hopeVal) {
          case 'string':
            result[key] = item + ''
            break
          case 'number':
            result[key] = Number(item)
            break
          default:
            result[key] = item
            break
        }
      } else {
        result[key] = hopeVal
      }
    }
  }
  return result as T
}
