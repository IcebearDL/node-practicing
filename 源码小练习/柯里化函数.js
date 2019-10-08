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

    const wrapper = function () {
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

    return wrapper
}

function A(a, b, c) {
    return a + b + c
}

const _A = createCurry(A);

console.log(_A(1)(2)(3));