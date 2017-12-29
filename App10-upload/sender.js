/**
 * @overview: sender
 * @author: txBoy
 * @created 2017-04-07
 */

const axios = require('axios');
const queryString = require('querystring');
const encodeReg = /application\/x-www-form-urlencoded/;
const JSONReg = /application\/json/;

var sender = {};
/**
 * http请求方法的封装,涉及到API请求的地方都走这里, 便于统一处理
 * @param url
 * @param options
 */
function request(url, options) {
    var options = Object.assign({}, options);
    options.url = url;
    options.timeout = options.timeout || 30000;
    if (options.method) options.method = options.method.toUpperCase();

    const headers = {};
    headers['Content-Type'] = options.contentType || options.headers && options.headers['Content-Type'] || 'application/json';
    options.headers = Object.assign((options.headers || {}), headers);

    if (options.method === 'POST') {
        if (typeof options.data === 'object') {
            let type = options.headers['Content-Type'];

            if (JSONReg.test(type)) {
                options.data = JSON.stringify(options.data);
            } else if (encodeReg.test(type) || !type) {
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
                options.data = queryString.stringify(options.data);
            }
            // else if (multipartReg.test(type)) {
            //     // options.data = JSON.stringify(options.data);
            //     // options.headers['Content-Type'] = 'application/json';
            //     delete options.headers['Content-Length'];
            //     delete options.headers['Content-Type'];
            //
            //     options.transformRequest = [function (data, headers) {
            //         const formData = new FormData();
            //         formData.append('mutipart', data.mutipart);
            //         return formData;
            //     }];
            // }
        }
    } else {
         if (typeof options.data === 'object') {
             url = url + (url.indexOf('?') > 0 ? '&' : '?') + queryString.stringify(options.data);
             options.data = null;
         }
    }
    console.log(options)
    return axios(options);
}

/**
 * sender: http get 方法封装
 * @param url
 * @param options  // 特殊接口需要headers可通过options传递
 * @returns Promise
 * @example var res = await sender.get('/api/getList', {data: {page:1, size:10}})
 */
sender.get = function (url, options) {
    options.method = 'GET';
    options.params = options.data || null;
    return request(url, options);
}

/**
 * sender: http post 方法封装
 * @param url
 * @param options  // 特殊接口需要headers可通过options传递
 * @returns Promise
 * @example var res = await sender.post('/api/edit', {data: {name:'txBoy'}})
 */
sender.post = function (url, options) {
    options.method = 'POST';
    return request(url, options);
}

module.exports = sender;
