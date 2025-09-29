import { getMemoryCache, setMemoryCache } from '@/utils/cacheMemory'

interface optInter {
  key?: string
  method?: 'GET' | 'POST'
  params?: Record<string, unknown>
  body?: Record<string, string | object | number> | BodyInit | null
  headers?: HeadersInit
  server?: boolean // 是否在服务端获取，falss|仅在客户端执行调用
  lazy?: boolean
  immediate?: boolean
  default?: boolean
  transform?: (data: unknown) => unknown
  cache?: boolean // 读取缓存数据
}

function apiRequest(url: string, method: 'GET' | 'POST', opts: optInter = {}) {
  const dataKey = opts.key || url.slice(1).replace(/\//g, '-')
  return useAsyncData(
    dataKey,
    async () => {
      return await $fetch(url, {
        baseURL: useRuntimeConfig().public.apiBase,
        method,
        params: opts.params,
        body: opts.body,
        headers: { ...opts.headers },
        timeout: 30000
      })
    },
    {
      server: opts.server ?? true, // 默认服务端获取
      lazy: opts.lazy ?? false, // 懒加载: 访问 data.value 时, 才会发起请求
      immediate: opts.immediate ?? true, // 组件加载时立即执行请求
      transform: res => {
        if (opts.cache) {
          setMemoryCache(dataKey, res as object, 60 * 60)
        }
        return res
      },
      getCachedData: (key, nuxtApp) => {
        if (nuxtApp.isHydrating) {
          return nuxtApp.payload.data[key] // 客户端
        } else {
          return (opts.cache && getMemoryCache(key)) || nuxtApp.payload.data[key]
        }
      }
    }
  )
}

// 首页api
export const apiHome = {
  banner: async (key?: string) => await apiRequest('/app/banner', 'GET', { key, cache: true })
}
