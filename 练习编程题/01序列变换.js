/*
拉齐有一个01序列，他可以对这个序列进行任意多次变换，
每次变换都是把序列的最后若干个元素放到最前面，例如：010011，
将最后3个元素011放到最前面，序列变为011010。所有变换结束后，
拉齐需要挑出一个全为1的连续区间，要求最大化区间长度。
*/

let str = '', count = 0;
while (line = readline()) {
    str += line;
}
if (str.length === 1) {
    str === '1' ? count = 1 : null;
} else if (str[0] === '0' || str[str.length - 1] === '0') {
    judgeLength(str)
} else {
    let m = 0, n = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') m++
        else break;
    }
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] === '1') n++
        else break;
    }
    if (m + n < str.length) {
        count = m + n;
        judgeLength(str)
    } else count = str.length;
}
function judgeLength(string) {
    string = string.replace(/0+/g, '+');
    let strArray = string.split('+');
    for (let value of strArray) {
        value.length > count ? count = value.length : null;
    }
}
console.log(count);