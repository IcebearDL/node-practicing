//promise的源码实现
function MyPromise(func) {
    //promise参数必须是一个function
    if (typeof func !== 'function') {
        throw new Error('Uncaught TypeError: Promise resolver ' + func + ' is not a function.');
    }

    let self = this,

    //定义初始的promise的state
    this.state = 'pending';

    //创建resolve或reject时候的msg
    this.msg = undefined;

    //定义事件队列
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    //promise 成功的时候执行
    function resolve(value) {
        if (self.state === 'pending') {
            self.msg = value;
            self.state = 'resolved';
            self.onResolvedCallbacks.forEach(fn => fn());
        }
    }

    function reject(reason) {
        if (self.state === 'pending') {
            self.msg = reason;
            self.state = 'rejected';
            self.onRejectedCallbacks.forEach(fn => fn());
        }
    }

    //用try来处理异常
    try {
        func(resolve, reject)
    } catch (e) {
        reject(e)
    }
}