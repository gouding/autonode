const router = require('koa-router')()
const HomeCtrl = require('./controllers/HomeCtrl')
const LoginCtrl = require('./controllers/admin/LoginCtrl')

module.exports = (app) => {
  router.use(async (ctx, next) => {
    ctx.state ={
      name:'小丁哥儿33',
    }
      await next()
  })
  router.get('/', HomeCtrl.index)

  router.get('/admin/',LoginCtrl.index)
  router.post('/admin/login',LoginCtrl.login)

  app.use(router.routes())
    .use(router.allowedMethods())
}