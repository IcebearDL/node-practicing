//引入网络操作
const http = require('http');
const fs = require('fs');
const url = require('url');
//引入的formidable是用于form表单提交的服务器解析第三方包
const formidable = require('formidable');

let server = http.createServer();

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
    let pathname = url.parse(request.url).pathname;
    if(request.url === '/'){
        fs.readFile('ajax-test.html',function(err,data){
            if(err){
                response.end('文件打开失败');
            } else {
                response.setHeader("Content-Type","text/html;charset=utf-8");
                response.end(data);
            }
        })
    } else if(request.url === '/ajax.js'){
        fs.readFile('ajax.js',function(err,data){
            if(err){
                response.end('文件打开失败');
            } else {
                response.setHeader("Content-Type","application/x-javascript;charset=utf-8");
                response.end(data);
            }
        })
    } else if(request.url === '/formPost') {
        //用引入的IncomingForm创建新对象
        //解析request，input的内容传递给field对象，若上传文件则传递给files
        const form = new formidable.IncomingForm();
        form.parse(request,function(err,field,files){
            if(err) {
                response.end();
                return console.error('解析失败');
            } else {
                //遍历field
                // for(let key in field){
                //     str.push(key + ':' + field[key]);
                // }
                console.log(field)
                response.setHeader("Content-Type","text/plain;charset=utf-8");
                response.write('*提交数据成功*');
                response.end();
            }
        });
        
    } else{
        response.writeHead(404,{"Content-Type":"text/html;charset=UTF8"});
        response.end('404 Not Found');
    }
})

server.listen(5000,function(){
    console.log('服务器启动成功')
})


//用exports对象对node.js进行js文件之间的引用调用
//如exports.name = 'wxy';
// console.log(exports);
