module.exports = () => {
  return async (ctx, next) => {
    console.log('start', new Date())
    await next()
    console.log('end', new Date())
  }
}