const http = require('http');

const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())
router.get('/', (ctx, next) => {
  ctx.response.body = '<h1>home页面</h1>'
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

