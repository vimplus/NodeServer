import koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-body';
import routes from './routes';

const router = new Router();

const app = new koa();
const port = process.env.PORT || 3000;

app.use(koaBody({ multipart: true }));  // 让koa-body支持multipart/form-data;
app.use(routes());

// app.use(router.routes()).use(router.allowedMethods());

// 使用下面的方法，原本只支持post请求的接口如果通过get请求，会提示405
app.use(router.allowedMethods());

app.listen(port, () => {
    console.log('The server started on port', port);
});
