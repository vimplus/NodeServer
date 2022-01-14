import path from 'path';
import Koa from 'koa';
import cors from '@koa/cors';
import Router from 'koa-router';
import staticServer from 'koa-static';
import routes from './routes.js';

const router = new Router();

const __dirname = path.resolve();
console.log('__dirname:', __dirname);

const app = new Koa();
const port = process.env.NODE_ENV || 8888;

var distPath = path.join(__dirname + '/dist');

app.use(staticServer(distPath))
app.use(cors());
app.use(routes()).use(router.allowedMethods());


app.listen(port, () => {
    console.log('-------The App run at port:', port)
})


const app2 = new Koa();

var distPath = path.join(__dirname + '/dist');

app2.use(staticServer(distPath))
app2.use(cors());
app2.use(routes()).use(router.allowedMethods());

app2.listen(9999, () => {
    console.log('-------The App2 run at port:', 9999)
})