const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const router = require('./router')
const path = require('path')
app.use(views('views', { extension: 'ejs',}))
router(app)
// 公共数据，每个路由里面都要该数据
// router.use(async (ctx, next) => {
//   ctx.state = {
//     userName: '小丁哥',
//   }
//   await next()
// })
app.listen(3000, () => {
  console.log('running')
})
