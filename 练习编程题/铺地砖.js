/* 
    线下调试模板
*/
const fs = require('fs');
const fileStream = fs.createReadStream('test.txt');

/* 
    编程题代码
*/
const readline = require('readline');

rl = readline.createInterface({
    // input: process.stdin,
    input: fileStream
});

let k = true, n, m, a;

rl.on('line', line => {
    if (k) {
        t = +line;
        k = false;
    } else {
        n = +line.split(' ')[0];
        m = +line.split(' ')[1];
        a = +line.split(' ')[2];
        console.log(Math.ceil(n / a) * Math.ceil(m / a));
    };
});