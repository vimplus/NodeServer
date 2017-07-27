const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();
const port = process.env.PORT || 3000;

app.use(router.routes()).use(router.allowedMethods());


function checkOrigin(origin) {
	var whiteList = [
		'http://cors.thinktxt.com',
		'http://127.0.0.1:4000'
	]
	if (whiteList.indexOf(origin) != -1) {
		return true;
	}
	return false;
}

router.post('/api/test/cors', (ctx, next) => {
    var origin = ctx.headers.origin;
    console.log('---------origin:', origin)
    if (checkOrigin(origin)) {
        ctx.set('Access-Control-Allow-Origin', origin);
        ctx.set('Access-Control-Allow-Credentials', true);
        ctx.set('Access-Control-Allow-Headers', 'x-requested-with,content-type');
        ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        // ctx.set('Access-Control-Max-Age', 1728000);
    }
    ctx.body = {
        status: 10000,
        data: 'This a cross-domain POST request.',
        msg: 'success'
    }
})


router.get('/api/test/cors', (ctx, next) => {
    var origin = ctx.headers.origin;
    console.log('---------origin:', origin)
    if (origin == 'http://127.0.0.1:4000') {
        ctx.set('Access-Control-Allow-Origin', origin);
        ctx.set('Access-Control-Allow-Credentials', true);
        ctx.set('Access-Control-Allow-Headers', 'x-requested-with,content-type');
        ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        // ctx.set('Access-Control-Max-Age', 1728000);
    }
    ctx.body = {
        status: 10000,
        data: 'This a cross-domain GET request.',
        msg: 'success'
    }
})


app.listen(port, () => {
    console.log('The server started on port', port);
});
