const http = require('http');

const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
const logs = require('./log')
const views = require('koa-views')
app.use(logs())
app.use(views('views', { extension: 'ejs' }))

app.use(router.routes()).use(router.allowedMethods())
const path = require('path')
const vp = path.resolve(__dirname, 'views')
// router.get('/',async (ctx, next) => {
//   // await next()
//   ctx.response.body = '<h1>home页面</h1>'
// })

router.get('/', async (ctx, next) => {
  await ctx.render('index.ejs',{
    title:'denzel',
    list:[
      {
        name:'小丁哥222',
        age:20
      },{
        name:'板凳儿',
        age:20
      },{
        name:'西瓜',
        age:20
      },
    ]
  })
})


app.listen(3000, () => {
  console.log('running')
})

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain;charset=utf-8');
//   res.end('您好， 我是 大白--------55555');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

