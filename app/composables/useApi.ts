interface UseApiOptions<T> {
  method?: 'GET' | 'POST'
  params?: Record<string, unknown>
  body?: Record<string, string | object | number> | BodyInit | null
  headers?: HeadersInit
  immediate?: boolean
  lazy?: boolean
  server?: boolean // 是否在服务端获取，falss|仅在客户端执行调用
  transform?: (data: unknown) => T
}

export function useApi<T>(key: string, url: string, options: UseApiOptions<T> = {}) {
  return useAsyncData<T>(
    key,
    async () => {
      const response = await $fetch<unknown>(url, {
        baseURL: useRuntimeConfig().public.apiBase,
        method: options.method || 'GET',
        params: options.params,
        body: options.body,
        headers: { ...options.headers }
      })

      if (options.transform) return options.transform(response)

      return response as T
    },
    {
      immediate: options.immediate ?? true, // 组件加载时立即执行请求
      lazy: options.lazy ?? false, // 懒加载: 访问 data.value 时, 才会发起请求
      server: options.server ?? true // 默认服务端获取
    }
  )
}
