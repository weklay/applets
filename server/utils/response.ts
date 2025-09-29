import type { H3Event } from 'h3'

export function createApiHandler<T>(handler: (event: H3Event) => Promise<T>) {
  return defineEventHandler(async (event: H3Event) => {
    try {
      const data = await handler(event)
      return { message: '成功', code: 200, data, timestamp: new Date().toISOString() }
    } catch (error: unknown) {
      console.error('[API Error]:', getVal(error, 'message'))
      return { message: getVal(error, 'message') || '服务器错误', code: getVal(error, 'statusCode') || 500, timestamp: new Date().toISOString() }
    }
  })
}
// 类型守卫：获取指定key值
function getVal(source: unknown, key: string): string {
  if (typeof source === 'object' && source) {
    return Reflect.get(source, key) as string
  }
  return ''
}
