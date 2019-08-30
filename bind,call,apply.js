// 写bind,call,apply的原生js

Function.prototype.mybind = function(){
    let obj = arguments[0] ? arguments[0] : window;
    obj.fn = this;
    let args = arguments[1] ? Array.prototype.slice.call(arguments,1) : [];
    //bind返回新函数,并不执行
    let result = () => obj.fn(...args);
    return result;
}

Function.prototype.mycall = function(){
    let obj = arguments[0] ? arguments[0] : window;
    obj.fn = this;
    let args = arguments[1] ? Array.prototype.slice.call(arguments,1) : [];
    let result = eval('obj.fn(...args)');
    delete obj.fn;
    return result;
}

Function.prototype.myapply = function(){
    let obj = arguments[0] ? arguments[0] : window;
    obj.fn = this;
    //args是传递过来的参数数组
    //使用三点扩展符扩展
    let args = arguments[1] ? arguments[1] : [];
    let result = eval('obj.fn(...args)');
    delete obj.fn;
    return result;
}

// ----------------------------------------------------------------------------------

function test(a,b,c,d){
    console.log(this);
    console.log(a , b , c, d);
}

let wxy = {name:'wxy',age:18,lover:'dl'};

test.mycall(wxy,90,12,'??','sdf');

// console.log([].concat.mybind([1,2,3],[2,3,4]))