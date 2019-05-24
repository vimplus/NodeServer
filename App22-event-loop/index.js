// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('------script start');
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });
// console.log('script end--------');




// process.nextTick(function(){
//     console.log(7);
// });

// new Promise(function(resolve){
//     console.log(3);
//     resolve();
//     console.log(4);
// }).then(function(){
//     console.log(5);
// });
// console.log('------6------');
// process.nextTick(function(){
//     console.log(8);
// });





console.log('start')
Promise.resolve().then(function() {
  console.log('promise0')
})
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function() {
  console.log('promise3')
})
console.log('end')