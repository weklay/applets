interface CacheItem {
  data: object
  expires: number // 时间戳
}

const cache = new Map<string, CacheItem>()

/**
 * 设置缓存
 * @param key 缓存键
 * @param data 数据
 * @param ttl 过期时间（秒）
 */
export function setMemoryCache(key: string, data: object | unknown, ttl: number) {
  if (import.meta.server) {
    const expires = Date.now() + ttl * 1000
    cache.set(key, { data: data || '', expires })
  }
}

/**
 * 获取缓存
 * @param key 缓存键
 * @returns 缓存数据或 null
 */
export function getMemoryCache(key: string) {
  if (!import.meta.server) return null // 客户端不缓存

  const item = cache.get(key)
  if (!item) return null

  if (Date.now() > item.expires) {
    cache.delete(key)
    return null
  }

  return item.data
}

/**
 * 清除缓存（可选，用于主动刷新）
 */
export function clearMemoryCache(key?: string) {
  if (key) {
    cache.delete(key)
  } else {
    cache.clear()
  }
}
