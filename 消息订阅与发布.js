function PubSub() {
    this.handles = {
        eventName: {
            eventsList: [],
            isOne: false,
        }
    }
}

//定义PubSub上的订阅功能
PubSub.prototype.subscribe = function (eventName, callback) {
    let EventsList = [];

    //参数错误，抛出异常
    if (arguments.length < 2) {
        throw new TypeError('arguments error');
    }

    //对应对象上的handles中有对应要订阅的事件
    if (Reflect.has(this.handles, eventName)) {
        EventsList = this.handles[eventName].eventsList;
    } else {
        this.handles[eventName] = {
            eventsList: [callback],
            isOne: false,
        };
    }
    EventsList.push(callback);
}

//定义PubSub上的发布功能
PubSub.prototype.publish = function (eventName, ...rest) {

    //对应对象上的handles中有已经订阅的事件
    if (this.handles[eventName]) {
        let EventsList = this.handles[eventName].eventsList;
        if (EventsList) {

            //遍历执行订阅的回调函数
            for (let i = 0; i < EventsList.length; i++) {
                EventsList[i].apply(this, rest)
            }
        }
    }
    return this;
}

const myPub = new PubSub();

myPub.subscribe('event', function (data) {
    console.log('触发');
    console.log(data)
})

myPub.subscribe('event', function (data) {
    console.log('触发2');
    console.log(data)
})
// document.getElementById('btn').onclick = function () {
    myPub.publish('event', 123123);
// }