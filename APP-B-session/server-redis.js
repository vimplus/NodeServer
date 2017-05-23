'use strict'
let session = require('koa-generic-session')
let redisStore = require('koa-redis')
const route = require('koa-route')
const logger = require('koa-logger')
let koa = require('koa')
let app = koa()

app.keys = ['some secret hurr','keys']
app.use(session({
    store: redisStore()
}))
app.use(logger())

app.use(route.get('/',
    function*(){
        let n = this.session.views || 0
        this.session.views = ++n
        this.body = "hello world   "+  n + ' views'
    })
).use(route.get('/user/:user',
    function*(user){
        console.log(user);
        this.body = "hello"+user
    })
)

app.listen(3001)
console.log('listening on port 3001')