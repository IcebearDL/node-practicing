function meetWxy() {
    console.log('----------------------------');
    console.log('2019年1月6日第一次遇到王馨悦。');
    var first = new Promise(function (resolve, reject) {        //做一些异步操作
        setTimeout(function () {
            console.log('开始慢慢约会！');
            resolve('开始网恋。');
        }, 2000);
    });
    return first;
}

function knowWxy(data) {
    console.log('考试周之后第一次分割两地1一个月：' + data);
    var p = new Promise(function (resolve, reject) {        //做一些异步操作
        setTimeout(function () {
            console.log('1一个月终于到了!');
            resolve('2月的最后一天向王馨悦表白，对外官宣。');
        }, 3000);
    });
    return p;
}

function likeWxy(data) {
    console.log('新学期开始，和王馨悦开始谈恋爱：' + data);
    var p = new Promise(function (resolve, reject) {        //做一些异步操作
        setTimeout(function () {
            console.log('幸福的一个学期，慢慢爱上一个人。');
            resolve('一个暑假过去了');
        }, 3000);
    });
    return p;

}

function nowWxy(data) {
    console.log('学期结束，暑假开始，但过的很快：' + data);
    var p = new Promise(function (resolve, reject) {        //做一些异步操作
        setTimeout(function () {
            console.log('明天8月19日，王美丽就要回来了！');
            resolve('继续爱吧!!');
        }, 3000);
    });
    return p;

}

//then里面的匿名函数调用；
// meetWxy().then(function(msg){
//     return knowWxy(msg)
// }).then(function(msg){
//     return likeWxy(msg)
// }).then(function(msg){
//     return nowWxy(msg)
// }).then(function(msg){
//     console.log(msg);
//     console.log('----------------------------')
// }).catch((err)=>{
//     console.log(err);
// })

//使用箭头匿名函数 ; 体现出箭头函数的优势，简化js写法
meetWxy().then(msg => knowWxy(msg)
).then(msg => likeWxy(msg)
).then(msg => nowWxy(msg)
).then(msg => {
    console.log(msg);
    console.log('----------------------------')
}).catch(err => console.log(err))


//状态默认是等待，在代码中进行判断，使用reslove处理成功传递参数，使用reject处理失败传递参数
//reslove，reject只能接受传递一个参数
function proTest(num) {
    return new Promise((resolve, reject) => {
        if (num >= 10) resolve('数字大于等于10')
        else reject('数字小于10')
        // reslove('成功')  //状态由等待变为成功，传的参数作为then函数中成功函数的实参
        // reject('失败')  //状态由等待变为失败，传的参数作为then函数中失败函数的实参
    })
}

//then中有2个参数，第一个参数是状态变为成功后应该执行的回调函数，第二个参数是状态变为失败后应该执行的回调函数。
//如果then只有一个参数，则就是处理成功的回调，可把处理失败统一放在结尾用.catch处理

proTest(9).then(msg => console.log('成功' + msg), msg => console.log('失败' + msg));

//这里可以手动抛出异常throw Error，则会跳出链式函数，不会执行下面的then
proTest(19).then(msg => { console.log('成功' + msg); throw Error('????????'); }).then((msg) => {
    console.log('不知道有没有参数了');
}).catch((err) => {
    console.log('err' + err);
})

//可以使用Promise.all方法并行执行多个promise，all两个全成功，才表示成功
let result = Promise.all([proTest(5), proTest(9)]);
result.then((data) => {
    console.log(data) //[ 1, 2 ]
})