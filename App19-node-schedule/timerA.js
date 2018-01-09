const schedule = require('node-schedule');
const moment = require('moment');

exports.timerA = () => {
    const rule = new schedule.RecurrenceRule();
    // 每10秒执行
    rule.second = [0,10,20,30,40,50];

    const j = schedule.scheduleJob(rule, function(){
        console.log('second - 现在时间：', moment().format('YYYY-MM-DD HH:mm:ss'));
    });
    console.log('-----j:', j)
};
