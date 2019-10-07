//自定义一个new方法，构造函数以参数传入
function New(func) {
    //定义一个空变量，为最终返回的实例
    const obj = {};
    if (func.prototype !== null) {
        obj.__proto__ = func.prototype;
    }

    //result为构造函数执行之后得到的执行结果
    const result = func.apply(obj, Array.prototype.slice.call(arguments, 1));

    //当在构造函数中指明了返回对象，则new的结果就是返回执行结果
    if ((typeof result === 'object' || typeof result === 'function') && result !== null) {
        return result
    }

    //如果构造函数没有指定返回对象。则默认返回obj，即实例对象
    return obj
}