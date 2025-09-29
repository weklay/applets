export default defineEventHandler(event => {
  const query = getQuery(event)
  console.log('000000请求接口================' + JSON.stringify(query))
  return {
    message: '成功',
    code: 200,
    data: {
      url: 'https://oss.unismartcloud.com/ID/20250928/uY4fKMNEX/43732323eddfc87f13d6c1901b584b45.webp?auth_key=1759190400-0-0-ccd334039b883b90c9324a8ba83c7ca2',
      host: 'unismartcloud.com'
    }
  }
})
