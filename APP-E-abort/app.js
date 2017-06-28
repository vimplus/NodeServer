/**
 * @overview: Koa App.js
 * @author: txBoy
 * @created 2017-03-31
 */

import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-bodyparser';
// import session from 'koa-session';
import views from 'koa-views';
import path from 'path';

// console.log(session)

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 9008;

app.use(views(path.resolve(__dirname, '../dist'), {
    extension: 'html'
}))

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

router.get('/api/getList', async (ctx, next) => {
    console.log(ctx.request.query)
    ctx.response.body = {
		code: 10000,
        content: ['list01', 'list02'],
		msg: 'success'
	};
});

router.post('/api/update', async (ctx, next) => {
    console.log('----------ctx:', ctx)
    // console.log(ctx.request.body)
    ctx.response.body = {
		code: 10000,
        conntent: 'txBoy',
		msg: 'success'
	};
});


app.use(async (ctx, next) => {
    if (ctx.path.startsWith('/test')) {
        await next();
    } else {
        await ctx.render('index', {
            data: 'txBoy'
        });
    }
})

app.use(async (ctx) => {
    ctx.response.body = 'Test is here.';
})



app.listen(port, () => {
    console.log('Server started on port ' + port);
})
