import type { FetchOptions } from 'ofetch'

// 定义请求方法类型
type HttpMethod = 'get' | 'post'

// 响应包装类型
// interface HttpResponse<T> {
//   data: Ref<T | null>
//   pending: Ref<boolean>
//   error: Ref<unknown>
//   refresh: () => Promise<void>
//   execute: () => Promise<void>
// }

// 主类
class HttpRequest {
  private baseURL: string = useRuntimeConfig().public.apiBase
  // private isServer: boolean = typeof window === 'undefined'

  private request(method: HttpMethod, url: string, opts: FetchOptions<'json'> = {}) {
    return new Promise((resolve, reject) => {
      const fullUrl = (this.baseURL + url).replace(/\/+/g, '/')
      try {
        console.log(opts)
        resolve(useAsyncData(() => $fetch(fullUrl, { method: 'get' })))
      } catch {
        return reject()
      }
    })
  }

  // GET 请求
  get(url: string, opts?: Omit<FetchOptions<'json'>, 'method'>) {
    return this.request('get', url, opts)
  }

  // POST 请求
  post(url: string, body?: object, opts?: Omit<FetchOptions<'json'>, 'method'>) {
    return this.request('post', url, { ...opts, body })
  }
}

// 生成单例
const useHttp = new HttpRequest()

// 首页api
export const apiHome22 = {
  banner: (data: object) => useHttp.get('/app/banner', { body: data })
}
