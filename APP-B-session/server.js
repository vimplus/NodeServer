'use strict'
let session = require('koa-session')
const route = require('koa-route')
const logger = require('koa-logger')
let koa = require('koa')
let app = koa()

app.keys = ['some secret hurr']
app.use(session({
    key: 'skey',       /** (string) cookie key (default is koa:sess) */
    maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
},app))
app.use(logger())

app.use(route.get('/',
    function*(){
        let n = this.session.views || 0
        this.session.views = ++n;

        var isNew = this.session.isNew;

        if (isNew) {
            // user has not logged in
            console.log(isNew)
            console.log('user has not logged in')
        } else {
            // user has already logged in
            console.log('user has already logged in')
        }

        this.body = "hello world   "+  n + ' views'
    })
).use(route.get('/user/:user',
    function*(user){
        console.log(user);
        this.body = "hello "+user
    })
)

app.listen(3001)
console.log('listening on port 3001')