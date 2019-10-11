/**
 * 需求: 
 * 实现一个person对象,可以链式调用它的方法,如:
 * person.eat().work().sleep() 按顺序执行出结果
 * eat() : console.log('eat')
 * work() : console.log('work')
 * sleep() : 两秒后打印出console.log('sleep')
 */

const person = {
    todoList: [],
    index: 0,
    start: function () {
        this.next();
        return person
    },
    eat: function () {
        this.todoList.push(() => {
            console.log('eat');
            this.next();
        });
        return person
    },
    work: function () {
        this.todoList.push(() => {
            console.log('work');
            this.next();
        });
        return person
    },
    sleep: function () {
        this.todoList.push(() => {
            setTimeout(() => {
                console.log('2s later ...sleep');
                this.next()
            }, 2000)
        });
        return person
    },
    next: function () {
        //获取当前的func
        const fn = this.todoList[this.index];
        //index++
        this.index++;
        //当fn为函数 则执行
        if (typeof fn === 'function') {
            fn();
        }
    }
}

//可实现,但必须调用next()开启任务队列调用

//难点在于如何让它自己触发链式调用,不用next()手动调用

// person.eat().work().sleep().eat();
// person.next()


//用promise实现链式调用

class Person {
    constructor(str) {
        this.queue = Promise.resolve();
        this.sayHello(str)
    }
    sayHello(str) {
        console.log('Hello~! My name is ' + str);
    }
    eat(food = 'food') {
        this.queue = this.queue.then(() => {
            console.log('I eat ' + food);
        })
        return this
    };
    work(something = 'something') {
        this.queue = this.queue.then(() => {
            console.log('I am busy for ' + something);
        })
        return this
    };
    sleep(time = 2) {
        this.queue = this.queue.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(time + 's later ...sleep');
                    resolve();
                }, 2000)
            })
        })
        return this
    }
    message(mes = 'message') {
        this.queue = this.queue.then(() => {
            console.log(mes);
        })
        return this
    }
}

const dl = new Person('DL & WXY');
dl.eat('猪猪葵').work('找工作').sleep(2).message('我好困哦')
    .sleep(2).message('明天继续加油啦~').sleep(1).message('love u');