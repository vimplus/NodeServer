const utils = require('./utils');
const keys = require('./keys');

const plainText = 'Hello, 乐潇游~';

const encrypted = utils.encrypt(keys.pubKey, plainText);        // 加密
const decrypted = utils.decrypt(keys.privKey, encrypted);       // 解密

console.log('-----encrypted:', encrypted);
console.log('-----decrypted:', decrypted.toString());
