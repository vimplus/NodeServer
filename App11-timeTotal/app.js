const Koa = require('koa');
const staticServer = require('koa-static');

const app = new Koa();
const port = process.env.PORT || 4000;

app.use(staticServer(__dirname));

app.listen(port, () => {
    console.log('The server started on port', port);
})
