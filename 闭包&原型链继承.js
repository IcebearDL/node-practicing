var c = {
    name: "object",
    getName: function () {
       return function a() {
            console.info(this.name)
       }
   }
};

let d = {name:'wxy'};

let f = c.getName();

f.call(d);


//使用原型链继承
function Father(name,age){
    this.name = name;
    this.age = age;
    this.sayHi = function(){
        console.log('hi');
    }
}

Father.prototype.sayYep = function (){
    console.log('Yep');
}

function Son(name,age,school){
    //用call实现继承
    Father.call(this,name,age);
    this.school = school;
}

Son.prototype = new Father();

let b = new Son('wxy',18,'华科');
b.sayYep();


//ES6的继承方式
class Mother{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log('Hi');
    }
}

class Daughter extends Mother{
    constructor(name,age,love){
        //使用super关键字继承父类的属性，即调用了父类的构造方法
        super(name,age);
        this.love = love;
    }
}

let daughter = new Daughter('wxy',18,'dance');
console.log(daughter);