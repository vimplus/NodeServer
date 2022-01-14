import Router from 'koa-router';
const router = new Router();

export default () => {
    router.get('/api/get', (ctx, next) => {
        ctx.body = {
            code: 10000,
            data: {
                name: 'txboy'
            },
            msg: '请求成功!'
        }
    });
    router.get('/api/9999', (ctx, next) => {
        ctx.body = {
            code: 10000,
            data: {
                name: 'txboy'
            },
            msg: '9999请求成功!'
        }
    });
    return router.routes();
};
