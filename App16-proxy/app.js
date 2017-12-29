const axios = require('axios');

async function test() {
    var response = await axios({url: 'http://api.map.baidu.com/api?v=2.0&ak=p29A2daK2UV9am7BXaUr95pqowvxvUQ3', method: 'GET'})
    var res = response && response.data;
    console.log('-----------res:', res)
}

async function make() {
    try {
        var response = await axios({url: 'http://www.baidu.com', method: 'GET', proxy: {
            host: '116.53.238.200',
            port: 1935
        }})
        var res = response && response.data;
        console.log('-----------res:', res)
    } catch (err) {
        console.log('-----------err:', err)
    }
}


make()

// test()
