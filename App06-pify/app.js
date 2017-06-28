const fs = require('fs');
const pify = require('pify');

var readFile = pify(fs.readFile);
readFile('package.json', 'utf8').then(data => {
    console.log('-----readFile:', JSON.parse(data).name);
})

var fsPromise = pify(fs);
fsPromise.readFile('package.json', 'utf8').then(data => {
    console.log('-----fs.readFile:', JSON.parse(data).name);
})
