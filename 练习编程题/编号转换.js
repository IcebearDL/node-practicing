/*
输入：
输入的第一行为一个正整数T，表示有T组测试数据（1<=T<=10^5）。
随后的T行中，每行为一组测试数据，为一种形式表示的单元格坐标。
保证所有的坐标都是正确的，且所有行列坐标值均不超过10^6。

样例输入：
2
R23C55
BC23

输出：
对每组测试数据，单独输出一行，为单元格坐标的另一种表示形式。

样例输出：
BC23
R23C55

*/
let r = /^R\d+C\d+$/, n = read_line(), input = [];
while (input.length != n) {
    input.push(read_line())
}
while (input) {
    r.test(input[0]) ? rXcY(input[0]) : b(input[0]);
    input.shift();
}

function rXcY(item) {
    let num1 = item.split('C')[0].split('R')[1];
    let num2 = parseInt(item.split('C')[1]);
    let str = '', p;
    while (num2) {
        if (num2 % 26 !== 0) {
            str = String.fromCharCode(64 + num2 % 26) + str;
        } else {
            str = 'Z' + str;
            num2--;//退一位
        }
        num2 = Math.floor(num2 / 26);
    }
    print(str+num1);
}
function b(item) {
    let row = item.replace(/[A-Z]+/,'');
    let char = item.replace(/\d+/,'');
    let col = 0;
    while(char){
        col += (char.charCodeAt()-64)*Math.pow(26,char.length-1);
        char = char.slice(1); 
    }
    print('R'+row+'C'+col)
}

