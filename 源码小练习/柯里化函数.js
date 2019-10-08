//封装一个柯里化函数，原理即参数收集，收集完了之后执行所有参数

// @func 为传入的函数
// @arity 用来标记剩余参数个数
// @args 用来收集参数 
function createCurry(func, arity, args) {
    if (typeof func !== 'function') {
        throw new Error('TypeError: ' + func + ' is not a function.');
    }

    //第一次执行不会传入arity
    arity = arity || func.length;
    //第一次执行不会传入args
    args = args || [];

    return function () {
        const _args = [].slice.call(arguments);

        //将每次调用的参数存入args
        args = args.concat(_args);

        //如果参数少于最初的func.length,则递归调用，继续收集参数
        if (_args.length < arity) {
            arity -= _args.length;
            return createCurry(func, arity, args);
        } else {
            //参数收集完毕，则执行
            return func.apply(null, args)
        }
    }
}

function A(a, b, c) {
    return a + b + c
}

const _A = createCurry(A);

console.log(_A(1)(2)(3));



//封装一个柯里化的add函数；实现以下都相等
//add(1)(2)(3)(4)
//add(1,2,3,4)
//add(1,2)(3,4)
//add(1,2,3)(4)

function add() {
    //args用来保存参数
    const args = [...arguments];

    //返回一个立即执行函数，返回值为adder的引用，以便于下次调用
    //返回值函数adder的引用的toString被重写，返回之前所有add调用的参数的求和
    return (function (args) {
        //
        const adder = function () {
            //继续保存args
            args.push(...arguments);
            //返回函数引用
            return adder
        }

        //重写函数引用的toString方法，使得返回值可以参与运算
        adder.toString = function () {
            return args.reduce((total, current) => total + current)
        }
        
        return adder
    })(args)
}

const a = add(1)(2)(10,20)(100);
console.log(a.toString());