module.exports = {
  index: async (ctx, next) => {
    await ctx.render('admin/login', {
      title: '登录系统'
    })
  },
  login: (ctx, next) => {
    ctx.response.body = { ret: 'success' }
  }
}