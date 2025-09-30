export default defineEventHandler(event => {
  const query = getQuery(event)
  console.log('000000请求接口================' + JSON.stringify(query))
  return {
    message: '成功',
    code: 200,
    data: [
      { url: '/siteadmin/upload/img/1917133146671624194.avif', link: 'home/promote' },
      { url: '/siteadmin/upload/img/1917133255503220737.avif', link: 'home/promote' },
      { url: '/siteadmin/upload/img/1916749462155390978.avif', link: 'home/promote' },
      { url: '/siteadmin/upload/img/1916749037275811842.avif', link: 'home/promote' },
      { url: '/siteadmin/upload/img/1916748859413204993.avif', link: 'home/promote' },
      { url: '/siteadmin/upload/img/1916435567492354049.avif', link: 'home/promote' },
      { url: '/siteadmin/upload/img/1916434729204654082.avif', link: 'home/promote' },
      { url: '/siteadmin/upload/img/1916434398465019906.avif', link: 'home/promote' }
    ]
  }
})
