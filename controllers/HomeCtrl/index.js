module.exports = {
  index: async (ctx, next) => {
    const { state: { name } } = ctx;
    await ctx.render('index', {
      title: '板凳儿',
      name: name,
      list: [
        {
          name: 'ddd'
        }, {
          name: 'bbb'
        }
      ],
      content: '<h3>content</h3>'
    })
  }
}