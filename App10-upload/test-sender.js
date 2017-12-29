const sender = require('./sender');
const path = require('path');
const fs = require('fs');
console.log('-----------sender:', sender)

var params = {file: fs.createReadStream(path.join(__dirname + '/upload/markdown.png')) }
console.log('----------params:', params)

function senderUpload() {
    sender.post('http://127.0.0.1:3000/api/sender/upload', {data: params}).then(res => {
        console.log('-----res:', res && res.data)
    })
}

senderUpload()
