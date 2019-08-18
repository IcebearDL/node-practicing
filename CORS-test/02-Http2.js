//引入网络操作
let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer();

server.listen(8080,function(){
    console.log('服务器启动成功')
})

// 关于中文乱码，默认write发送的就是utf-8编码的内容，但浏览器不知道你是utf-8的内容，用电脑的默认编码去解析，而
// 电脑的默认编码一般是gbk，所以会出现中文乱码

server.on('request',function(request,response){
    console.log('收到客户端请求，请求路径为'+request.url);
    //response即对客户端的响应，response有write方法可以写多次，
    //最后要加end（）结束，不然客户端一直等待
    // response.writeHead(200,{"Content-Type": "text/plain;charset=utf-8"})
    // response.writeHead(200, {"Content-Type": "text/html"}); 
    // response.write('<head><meta charset="utf-8"/></head>');
    // response.write('请求我的客户端端口号是'+request.socket.remotePort+'\n远程地址是'+request.socket.remoteAddress)
    let data = '跨域接受到了信息';
    let res = {
        code:1,
        msg:'成功',
        data:data
    }

    //调用url模块来解析url
    //.parse返回一个url对象，第二个参数为true，则querystring 模块来解析 URL中查询字符串部分,默认false
    let pathname = url.parse(request.url).pathname;
    let params = url.parse(request.url, true);

    if(pathname === '/CROS'){

        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
        response.setHeader('Access-Control-Allow-Headers', 'Content-type');
        response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
        response.setHeader("Content-Type","text/plain;charset=utf-8");
        response.write(JSON.stringify(res));
        response.end();

    }
     else if(pathname === '/CROS/jsonp'){

        //这里判断是否有query跨域行为，和跨域的callback回调函数
        if (params.query && params.query.callback) {
            let str = params.query.callback + '(' + JSON.stringify(res) + ')';//jsonp
            response.end(str);
        } 

    } 
    else{
        response.end('404 Not Found');
    } 
})


//用exports对象对node.js进行js文件之间的引用调用
//如exports.name = 'wxy';
// console.log(exports);