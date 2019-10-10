//在Todo中打出合适的代码,使得程序运行之后打印出'a','b'
/**
 * "use strict"
 * function a() {
 *     console.log('a');
 * }
 * function b() {
 *     //Todo
 *     a()
 * }
 * b();
 * b();
 * 
 */

"use strict"

function a() {
    console.log('a');
}

function b() {
    if (a() === undefined) {
        a = () => {
            console.log('b');
            return true
        }
        return;
    } else {
        return;
    }
    a();
}

b();
b();