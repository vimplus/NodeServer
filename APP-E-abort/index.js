
var register = require('babel-register');

register({
    presets: ['es2015', 'stage-3'],
    plugins: [
        "add-module-exports",
        "transform-async-to-generator"
    ]
});
require('babel-polyfill');
require('./app.js');
global.navigator = { userAgent: 'all' }
