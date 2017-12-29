import Koa from 'koa';
import path from 'path';

import importA, { obj, foo } from './importA';
import { obj as data } from './importA';
import { a, b } from './importB';

console.log('---------importA:', importA)
console.log('---------obj:', obj)
console.log('---------data:', data)
console.log('---------foo:', foo)
console.log('---------a:', a)
console.log('---------b:', b)

const app = new Koa();
const port = process.env.PORT || 8888;


app.listen(port, () => {
    console.log('-------The App run at port:', port)
})
