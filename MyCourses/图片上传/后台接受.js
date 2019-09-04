const http = require('http');
const fs = require('fs');

let server = http.createServer();

server.on('request', function (request, response) {
    console.log('收到客户端请求，请求路径为' + request.url);
    //response即对客户端的响应，response有write方法可以写多次，
    //最后要加end（）结束，不然客户端一直等待
    // response.writeHead(200,{"Content-Type": "text/plain;charset=utf-8"})
    // response.writeHead(200, {"Content-Type": "text/html"}); 
    if (request.url === '/index') {
        fs.readFile('图片上传的弹窗组件.html', function (err, data) {
            response.setHeader("Content-Type", "text/html;charset=utf-8");
            if (err) {
                response.end('文件打开失败');
            } else {
                response.end(data);
            }
        })
    } else if (request.url === '/imgPost' && request.method === 'POST') {
        //这里需要后台接受 使用express框架
        // console.log(request);
        let postData = '';
        //监听到chunk编码（分块传输编码）chunked transfer encoding是HTTP的一种数据传输机制，
        //允许HTTP由应用服务器发送给客户端应用（ 通常是网页浏览器）的数据可以分成多个部分。
        request.on('data',chunk=>{
            //前台post的buffer数据toString为原始数据
            postData += chunk.toString()
            console.log('data:', postData)
        })
        response.setHeader("Content-type", "application/json; charset=utf-8");
        response.end('收到请求');
    } else {
        response.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
        response.end('404 Not Found');
    }
})

server.listen(5000, function () {
    console.log('服务器启动成功')
})


//用exports对象对node.js进行js文件之间的引用调用
//如exports.name = 'wxy';
// console.log(exports);
