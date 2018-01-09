const schedule = require('node-schedule');
const moment = require('moment');

exports.timerB = () => {
    const rule = new schedule.RecurrenceRule();
    // 每5分钟执行一次
    rule.minute  = [0, 5, 10, 15, 25, 30, 35, 40, 45, 50, 55];

    const j = schedule.scheduleJob(rule, function(){
        console.log('minute - 现在时间：', moment().format('YYYY-MM-DD HH:mm:ss'));
    });
};
