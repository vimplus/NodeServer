const net = require('net');
const readline = require('readline');
const port = process.env.PORT || 8899;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const server = net.createServer((socket) => {
    rl.on('line', (line) => {
        socket.write(line.trim());
    })
    socket.on('data', (chunk) => {
        console.log('-----From Client message:', chunk.toString());
    })
})

server.listen(port, (err) => {
    if (err) {
        console.log('该端口被占用!');
        return false;
    }
    console.log(`服务端成功运行在${port}端口.`);
})
