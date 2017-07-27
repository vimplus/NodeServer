/**
 * @overview: upload services - Provide upload related services.
 * @author: txBoy
 * @created 2017-07-27
 *
 */

const fs = require('fs');
const path = require('path');
const randomString = require('randomstring');

function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname)
            return true
        }
    }
}

var upload = {
    uploadFiles: async function (files) {
        return new Promise((resolve, reject) => {
            var results = {};
            // files是文件数组
            files = files || [];

            if (!Array.isArray(files)) {
                files = [files];
            }

            var saveDir = path.join(__dirname, '/upload');
            mkdirsSync(saveDir);

            function innerLoop() {
                let item = files[0];
                if (!item) return resolve(results);
                // debugger

                let readFrom = fs.createReadStream(item.path);
                let extname = path.extname(item.name);
                var fileName = randomString.generate(10) + extname;

                let saveTo = fs.createWriteStream(path.join(saveDir, fileName));
                readFrom.pipe(saveTo);
                // 收集文件名
                results.filename = fileName;

                readFrom.on('end', function (res) {
                    fs.unlinkSync(item.path);
                    files.splice(0, 1);
                    innerLoop();
                });

                readFrom.on('error', function (err) {
                    reject(false);
                });
            }

            innerLoop();

        })
    }
}

module.exports = upload;
