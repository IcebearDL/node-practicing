//自定义map方法
Array.prototype._map = function (func, thisArg) {
    //定义返回的数组
    const array = [];
    //判断func是否为函数
    if (typeof func === 'function') {
        const len = this.length;
        for (let k = 0; k < len; k++) {
            //用map参数func计算每一项并丢进array
            array.push(func.call(thisArg, this[k], k, this));
        }
    } else {
        throw new Error('TypeError: ' + func + ' is not a function.');
    }
    return array
}

Array.prototype._forEach = function (func, thisArg) {
    if (typeof func === 'function') {
        const len = this.length;
        for (let k = 0; k < len; k++) {
            func.call(thisArg, this[k], k, this);
        }
    } else {
        throw new Error('TypeError: ' + func + ' is not a function.');
    }
}

Array.prototype._filter = function (func, thisArg) {
    const array = [];
    if (typeof func === 'function') {
        const len = this.length;
        for (let k = 0; k < len; k++) {
            //通过func函数，返回值转化bool为true的丢进array
            const ret = func.call(thisArg, this[k], k, this);
            if (Boolean(ret)) {
                array.push(this[k]);
            };
        }
    } else {
        throw new Error('TypeError: ' + func + ' is not a function.');
    }
    return array
}

Array.prototype._some = function (func, thisArg) {
    if (typeof func === 'function') {
        const len = this.length;
        for (let k = 0; k < len; k++) {
            const ret = func.call(thisArg, this[k], k, this);
            //只要有一个满足即返回true
            if (Boolean(ret)) {
                return true
            };
        }
    } else {
        throw new Error('TypeError: ' + func + ' is not a function.');
    }
}

Array.prototype._every = function (func, thisArg) {
    if (typeof func === 'function') {
        const len = this.length;
        for (let k = 0; k < len; k++) {
            const ret = func.call(thisArg, this[k], k, this);
            //只要有一个不满足即返回false
            if (!Boolean(ret)) {
                return false
            };
        }
        return true
    } else {
        throw new Error('TypeError: ' + func + ' is not a function.');
    }
}