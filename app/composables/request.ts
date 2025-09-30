interface optInter {
  key?: string
  method?: 'GET' | 'POST'
  params?: Record<string, unknown>
  body?: Record<string, string | object | number> | BodyInit | null
  headers?: HeadersInit
  server?: boolean // 是否在服务端获取，falss|仅在客户端执行调用
  lazy?: boolean
  immediate?: boolean
  resVal?: object
  cache?: boolean // 读取缓存数据
}

function http<T>(url: string, method: 'GET' | 'POST', opts: optInter = {}, format: object | string): T {
  const dataKey = opts.key || url.slice(1).replace(/\//g, '-')
  const { data } = useAsyncData(
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
      default: () => opts.resVal || { code: '', data: {}, message: '' },
      transform: res => {
        let result: unknown = null
        if (format) {
          if (typeof format === 'string') result = getVal(res, format)
          else result = getObj(res, format)
        }
        if (opts.cache) setMemoryCache(dataKey, result, 60 * 60)
        return result
      },
      getCachedData: (key, nuxtApp) => {
        if (nuxtApp.isHydrating) {
          return nuxtApp.payload.data[key] // 客户端
        } else {
          return (opts.cache && getMemoryCache(key)) || nuxtApp.payload.data[key] || undefined
        }
      }
    }
  )
  return data as T
}

// 首页api
export const apiHome = {
  banner: () => http<[{ url: '' }]>('/app/banner', 'GET', {}, 'data')
}
