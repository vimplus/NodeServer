

var conn_flag = false;
var ws = new WebSocket("ws://118.178.126.171:7358/IP");
    //var ws = new WebSocket("ws://192.168.2.21:7358/IP");
ws.onopen = function () {
    console.log('sss')
    conn_flag = true;
    ws.send('http://112.114.90.131:3269')
};

ws.onmessage = function (evt) {
    //console.log(evt.data)
    // return
    var obj = JSON.parse(evt.data);

    console.log('------------evt:', evt)
    console.log('------------data:', obj)

};

ws.onclose = function (evt) {
    console.log("断开连接");
};

ws.onerror = function (evt) {
    console.log("连接出错!");
};
