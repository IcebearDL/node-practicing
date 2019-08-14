//引入文件操作File System
let fs = require('fs');

// 写入文件 三个参数
fs.readFile('./test.txt',function(error,data){
    console.log(data.toString())
});

//写入文件，四个参数，第三个options是编码格式，默认是'utf-8'
fs.writeFile('./你好1.txt','我是node.js',function(error){
    console.log('ok')})