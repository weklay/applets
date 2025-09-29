export default defineEventHandler(event => {
  const query = getQuery(event)
  console.log(query)
  return { a: 222, b: 33 }
})
