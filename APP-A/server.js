const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const mine = require('./config/mine');
const config = require('./config/config');

const port = process.env.PORT || 8086;

const server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    // 对中文解码，防止乱码
    pathname = decodeURI(pathname);
    console.log(pathname)

    // 重定向，考虑定义标准的url，以'/'结尾.
    if (path.extname(pathname) === '') {    //没有扩展名
        if (pathname.charAt(pathname.length-1) !== '/') {
            pathname += '/';
            var redirect = encodeURI('http://' + req.headers.host + pathname);  //encodeURI 防止中文目录报错
            console.log(redirect);
            res.writeHead(301, {
                location: redirect
            });

        }
    }
    // 获取资源的绝对路径
    var realFilePath = path.resolve(__dirname + '/dist' + pathname);
    console.log(realFilePath);

    var ext = path.extname(pathname);
    ext = ext ? ext.slice(1) : 'notKnow';

    if (ext.match(config.Expires.fileMatch)) {
        var expires = new Date();
        expires.setTime(expires.getTime() + config.Expires.maxAge * 1000);

        res.setHeader('Expires', exprires.toUTCString());
        res.setHeader('Cache-Control', 'max-age=' + config.Expires.maxAge);
    }

    var contentType = mine[ext] || 'text/plain';

    fs.stat(realFilePath, function (err, stats) {
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html'
            })
            res.end('<h3>404 Not Found</h3>')
        }
        console.log(stats)

        if (stats.isFile) {
            console.log('This is file.');
            fs.readFile(realFilePath + '/text.txt', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
                console.log(data)
            })

            res.writeHead(200, {
                'content-type': contentType
            });

            var stream = fs.createReadStream(realFilePath);
            stream.on('error', function () {
                res.writeHead(500, {'content-type': contentType});
            });

            stream.pipe(res);
        }

        if (stats.isDirectory) {
            var html = '<html><head><mete charset="UTF-8"></head><body>';

            fs.readdir(realFilePath, function (err, files) {

                if (err) {
                    console.log('目录读取失败！');
                } else {
                    console.log('Is Directory:' + files);
                    for (var i = 0; i < files.length; i++) {
                        //测当前目录下是否有index.html文件
                        // if (files[i] === "index.html") {
                        //   res.writeHead(200, { "content-type": "text/html" });
                        //   res.end();
                        //   break;
                        // }
                        html += "<div><a href='" + files[i] + "'>" + files[i] + "</a></div>";
                    }
                    html += '</body></html>'
                }

                res.writeHead(200, {'content-type': contentType});
                res.end(html);

            })
        }
    })
})

server.listen(port, function (res) {
    console.log('Server running on port:' + port);
})
