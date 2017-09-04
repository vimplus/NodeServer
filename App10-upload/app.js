// import koa from 'koa';
const koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const staticServer = require('koa-static');
const uploadService = require('./uploadService');

const app = new koa();
const router = new Router();
const port = process.env.PORT || 3000;

app.use(staticServer(__dirname));   // 托管HTML等静态文件
app.use(koaBody({ multipart: true }));  // 让koa-body支持multipart/form-data;

app.use(router.routes()).use(router.allowedMethods());

router.post('/api/files/upload', async (ctx, next) => {
    var content = ctx.request.body;
    var files = content && content.files && content.files.uploadFiles || null;
    if (!files) {
        ctx.body = {
            code: 99999,
            data: null,
            msg: 'error'
        }
        return;
    }
    // debugger
    var result = await uploadService.uploadFiles(files);
    // debugger
    if (result) {
        ctx.body = {
            code: 10000,
            data: result,
            msg: 'success'
        }
    } else {
        ctx.body = {
            code: 99999,
            data: null,
            msg: 'error'
        }
    }

})

app.listen(port, () => {
    console.log('The server started on port', port);
});
