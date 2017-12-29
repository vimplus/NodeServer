var register = require('babel-register');

register({
    presets: ['env']
});
require('babel-polyfill');
require('./app.js');
global.navigator = { userAgent: 'all' }
