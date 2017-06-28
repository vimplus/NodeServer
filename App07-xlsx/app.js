const fs = require('fs');
const xlsx = require('node-xlsx');
// Or var xlsx = require('node-xlsx').default;

// const data = [['借据编号', '借款人姓名', '身份证号', '放款时间', '债权转让时间', '借款期限', '审批金额（元）', '当前状态'], [1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
const data = [
    ['借据编号', '借款人姓名', '身份证号', '放款时间', '债权转让时间', '借款期限', '审批金额（元）', '当前状态'],
    ['${loanNo}', '${realName}', '${idCard}', '${paymentTime}', '${transferedTime}', '${installmentCount}个月', '${approvedAmount}', '${statusDesc}']
];
var buffer = xlsx.build([{name: "mySheetName", data: data}]); // Returns a buffer
console.log('---------buffer:', buffer)


fs.writeFile(__dirname + '/test.xlsx', buffer, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
