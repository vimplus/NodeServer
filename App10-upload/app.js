// import koa from 'koa';
const koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const staticServer = require('koa-static');
const fs = require('fs');
const path = require('path');
const uploadService = require('./uploadService');

const app = new koa();
const router = new Router();
const port = process.env.PORT || 3000;

app.use(staticServer(__dirname));   // 托管HTML等静态文件
app.use(koaBody({ multipart: true }));  // 让koa-body支持multipart/form-data;

app.use(router.routes()).use(router.allowedMethods());

router.post('/api/files/upload', async (ctx, next) => {
    var content = ctx.request.body;
    console.log('----content:', content)
    // uploadFiles 是input中的name属性值
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


router.post('/api/sender/upload', async (ctx, next) => {
    var content = ctx.request.body;
    var file = content && content.file || null;
    console.log('----------file:', file)
    if (!file) {
        ctx.body = {
            code: 99999,
            data: null,
            msg: 'error'
        }
        return;
    } else {
        let readFrom = fs.createReadStream(file.path);
        let saveTo = fs.createWriteStream(path.join(__dirname + '/upload/test.png'));
        readFrom.pipe(saveTo);
        readFrom.on('end', function (ret) {
            console.log('-----------ret:', ret)
        });

        readFrom.on('error', function (err) {
            console.log('-----------err:', err)
        });
        ctx.body = {
            code: 10000,
            data: '上传成功！',
            msg: 'success'
        }
    }
})

app.listen(port, () => {
    console.log('The server started on port', port);
});
