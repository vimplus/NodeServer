import Koa from 'koa';
import path from 'path';
import views from 'koa-views';
import staticServer from 'koa-static';

const app = new Koa();
const port = process.env.NODE_ENV || 8888;

var distPath = path.join(__dirname + '/dist');

app.use(views(distPath, {
    map: {
        html: 'ejs'
    }
}))

// ejs处理
app.use(async (ctx, next) => {
    var cPath = ctx.path;
    var html = cPath.replace(/^\/+/, '');

    if (ctx.method != "HEAD" && (cPath.indexOf('.html') != -1 || cPath == "/")) {
        await ctx.render(html || 'index', {
            data: {
                title: 'ejs-demo',
                list: 'list-title'
            }
        })
    } else {
        await next();
    }
})

// 静态资源托管 如果和 koa-views 同时应用，koa-static需要在koa-views之后使用
app.use(staticServer(distPath))

app.listen(port, () => {
    console.log('-------The App run at port:', port)
})
