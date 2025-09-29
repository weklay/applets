export default defineEventHandler(event => {
  const query = getQuery(event)

  return { a: query.foo, b: query.baz }
})
