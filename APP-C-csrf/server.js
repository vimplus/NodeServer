'use strict'
const csrf = require('koa-csrf')
let session = require('koa-session')
const route = require('koa-route')
const logger = require('koa-logger')
let koa = require('koa')
let app = koa()

app.keys = ['some secret hurr']
app.use(session(app))
app.use(logger())
app.use(csrf())
app.use(route.get('/',
    function*(){
        let n = this.session.views || 0
        this.session.views = ++n
        this.body = "hello world   "+  n + ' views' + this.csrf
    })
).use(route.get('/user/:user',
    function*(user){
        console.log(user);
        this.body = "hello"+user
    })
)

app.listen(3001)
console.log('listening on port 3001')
