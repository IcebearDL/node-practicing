//引入网络操作
let http = require('http');
let fs = require('fs');

let server = http.createServer();

server.listen(5000, function () {
    console.log('服务器启动成功')
})

// 关于中文乱码，默认write发送的就是utf-8编码的内容，但浏览器不知道你是utf-8的内容，用电脑的默认编码去解析，而
// 电脑的默认编码一般是gbk，所以会出现中文乱码

server.on('request', function (request, response) {
    console.log('收到客户端请求，请求路径为' + request.url);
    //response即对客户端的响应，response有write方法可以写多次，
    //最后要加end（）结束，不然客户端一直等待
    // response.writeHead(200,{"Content-Type": "text/plain;charset=utf-8"})
    // response.writeHead(200, {"Content-Type": "text/html"}); 
    // response.write('<head><meta charset="utf-8"/></head>');
    // response.write('请求我的客户端端口号是'+request.socket.remotePort+'\n远程地址是'+request.socket.remoteAddress)

    //模拟apache
    let dir = 'C:/Users/86156/Desktop/知否-Web';
    fs.readFile(dir + request.url, function (err, data) {
        if (err) return response.end('404 File Not Found.');
        response.end(data);
    })

    if (request.url === '/') {
        response.end('index page');
    } else if (request.url === '/wxy') {
        fs.readFile('test.html', function (err, data) {
            if (err) {
                //return有两个作用，1.方法返回值，2.阻止代码继续往后执行
                // 好处：跳出if else 循环，少了嵌套
                return response.end('文件打开失败');
            }
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader('Access-Control-Allow-Headers', 'Content-type');
            response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
            response.setHeader("Content-Type", "text/html;charset=utf-8");
            response.end(data);
        })
    } else if (request.url === '/formPost') {
        response.end('sdf');
    } else {
        response.end('404 Not Found');
    }
})


//用exports对象对node.js进行js文件之间的引用调用
//如exports.name = 'wxy';
// console.log(exports);
