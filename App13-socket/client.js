const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.connect({
    port: 8899,
    host: '127.0.0.1'
}, () => {
    rl.on('line', (line) => {
        client.write(line.trim())
    })
    client.on('data', (chunk) => {
        console.log('-----From server message:', chunk.toString());
    })
})
