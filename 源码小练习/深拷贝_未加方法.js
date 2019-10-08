//深拷贝递归运用
function deepCopy(newObj, oldObj) {
    for (let k in oldObj) {
        //不仅是对象里面要递归，并且数组内部也要递归，不然可能出现数组里面是对象的情况
        if (oldObj[k] instanceof Array) {
            newObj[k] = [];
            deepCopy(newObj[k], oldObj[k])
            //这两个的方向判断不能调换，因为array instanceof Object 也是 true
        } else if (oldObj[k] instanceof Object && !(oldObj[k] instanceof Function)) {
            // if(!(oldObj[k].valueOf() instanceof Object)){
            newObj[k] = oldObj[k]
            // }else{
            //     newObj[k] = {};
            //     deepCopy(newObj[k], oldObj[k])
            // }
        } else {
            newObj[k] = oldObj[k];
        }
    }
}

//深拷贝运用Json方法
function deepCopy2(newObj, oldObj) {
    newObj = JSON.parse(JSON.stringify(oldObj));
}

let a = {
    a: 12,
    b: 3,
    c: { name: 'Cobe', age: 39 },
    arr: [1, 2, 3, 4, 9, 123],
    state: null,
    num: new Number(123),
    boolean: new Boolean(true),
    string: new String('string'),
    regExp: /\d+/,
    date: new Date('2019-8-8')
};
let b = {};
deepCopy(b, a);
a.regExp = /\d*/
console.log(b, a);

//-----------------------------------------------------------------------------------------//

// 深深深深深最深的拷贝

function deepClone(data) {
    const type = this.judgeType(data);
    let obj;
    if (type === 'array') {
        obj = [];
        for (let i = 0, len = data.length; i < len; i++) {
            obj.push(this.deepClone(data[i]));
        }
    } else if (type === 'object') {
        obj = {};
        for (const key in data) {
            obj[key] = this.deepClone(data[key]);
        }
    } else {
        // 不再具有下一层次
        return data;
    }
}


function judgeType(obj) {
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
    };
    if (obj instanceof Element) {
        return 'element';
    }
    return map[Object.prototype.toString.call(obj)];
}