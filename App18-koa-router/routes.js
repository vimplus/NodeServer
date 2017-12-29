import Router from 'koa-router';
const router = new Router();

export default () => {
    router.get('/api/check', (ctx, next) => {
        ctx.body = {
            code: 10000,
            data: {
                name: 'txboy'
            },
            msg: '请求成功!'
        }
    });
    router.post('/api/post', (ctx, next) => {
        ctx.body = {
            code: 10000,
            data: {
                name: 'txboy'
            },
            msg: 'POST请求成功!'
        }
    });
    return router.routes();
};
