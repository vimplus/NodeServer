import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-body';
import { mongoClient } from 'mongodb';
import mongo from './mongoose';
import UserModel from './userModel';

const app = new koa();
const router = new koaRouter();
const port = process.env.PORT || 4000;

// Connection URL
var url = 'mongodb://172.30.3.206:27017/test';
var db = mongo(url);

db.connection.on("error", function (error) {
    console.log("------数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});

// Use connect method to connect to the Server
/*
async function mongo(url) {
    var db = await mongoClient.connect(url);

    var testColl = db.collection('cims_test');
    var ret = await testColl.insertOne({name:'txboy'});
    console.log('-----ret:', ret.result)
}
mongo(url);
*/

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

router.post('/api/user/register', async (ctx, next) => {
    var params = ctx.request.body;
    params.updateTime = Date.now();

    var data = await UserModel.create(params);
    
    ctx.body = {
        code: 10000,
        data: data,
        msg: '请求成功!',
        status: 'success'
    }
})


app.listen(port, () => {
    console.log('The server started on port', port);
});
