var register = require('babel-register');

register({
    presets: ['env']
});
require('babel-polyfill');
require('./app.js');
