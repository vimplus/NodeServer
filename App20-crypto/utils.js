const crypto = require('crypto');

exports.encrypt = (key, data) => {
    // 第二个参数是buffer类型
    return crypto.publicEncrypt(key, Buffer.from(data));
};


exports.decrypt = (key, encrypted) => {
    // encrypted是Buffer类型
    return crypto.privateDecrypt(key, encrypted);
};
