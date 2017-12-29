const moment = require('moment');

// 设置全局语言 default: moment.locale('en');
moment.locale('zh-CN');

// 当前时间
var now = moment().format('YYYY-MM-DD HH:mm:ss');
console.log('------now:', now);     // now: 2017-11-06 15:25:36

// 将时间转化为时间戳
var timestrapA = moment('2017年11月25日', 'YYYY年MM月DD日').format('X');
var timestrapB = moment('2017年11月25日', 'YYYY年MM月DD日').format('x');
var timestrapC = moment('2017/11/25', 'YYYY/MM/DD').format('x');
console.log('------timestrapA:', timestrapA);   // timestrapA: 1511539200
console.log('------timestrapB:', timestrapB);   // timestrapB: 1511539200000
console.log('------timestrapC:', timestrapC);   // timestrapB: 1511539200000

// 往前推一天
// 相关的单位有: years、month、days、hours、minutes、seconds
var offset1 = moment().subtract(1, 'days').format('YYYY-MM-DD');
var offset1A = moment().add(-1, 'days').format('YYYY-MM-DD');
console.log('------往前推一天:', offset1);    // 往前推一天: 2017-11-05
console.log('------往前推一天:', offset1A);   // 往前推一天: 2017-11-05

// 指定日期往前推一天
var offset2 = moment('2017年11月25日', 'YYYY年MM月DD日').subtract(1, 'days').format('YYYY年MM月DD日');
var offset2A = moment('2017年11月25日', 'YYYY年MM月DD日').add(-1, 'days').format('YYYY年MM月DD日');
console.log('------指定日期往前推一天:', offset2);           // 指定日期往前推一天: 2017年11月24日
console.log('------指定日期往前推一天:', offset2A);           // 指定日期往前推一天: 2017年11月24日
console.log(`------指定日期往前推一天:${offset2} 23:59:59`);    // 指定日期往前推一天: 2017年11月24日

// 7天后
var offset3 = moment().add(7, 'days').format('YYYY年MM月DD日');
console.log('------7天后:', offset3);     // 7天后: 2017年11月13日

// 6小时后
var offset4 = moment().add(6, 'hours').format('HH:mm:ss');
console.log('------6小时后:', offset4);    // 6小时后: 21:25:49

// 相对时间
var relative5 = moment("2015年10月10日", "YYYY年MM月DD日").fromNow();
console.log('------相对时间:', relative5);    // 相对时间: 2 年前

// 转换格式
var transition = moment('2017/11/25', 'YYYY/MM/DD').format('YYYY年MM月DD日');
console.log('------转换格式:', transition);    // 转换格式: 2017年11月25日

// 时间戳转日期
var format1 = moment(1510022715393).toDate();
var format2 = moment(1510022715393).format('YYYY-MM-DD HH:mm:ss');
console.log('------时间戳转日期-format1:', format1);    // 2017-11-07T02:45:15.393Z
console.log('------时间戳转日期-format2:', format2);    // 2017-11-07 10:45:15
