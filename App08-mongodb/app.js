import koa from 'koa';
import { mongoClient } from 'mongodb';

const app = new koa();

const port = process.env.PORT || 4000;

// Connection URL
var url = 'mongodb://172.30.3.206:27017/test';
// Use connect method to connect to the Server
/*async function mongo(url) {
    var db = await mongoClient.connect(url);

    var testColl = db.collection('cims_test');
    var ret = await testColl.insertOne({name:'txboy'});
    console.log('-----ret:', ret.result)
}

mongo(url);
*/
app.listen(port, () => {
    console.log('The server started on port', port);
});
