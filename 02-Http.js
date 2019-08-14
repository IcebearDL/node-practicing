//引入网络操作
let http = require('http');

let server = http.createServer();

server.listen(5000,function(){
    console.log('服务器启动成功')
})

server.on('request',function(request,response){
    console.log('收到客户端请求，请求路径为'+request.url);
    //response即对客户端的响应，response有write方法可以写多次，
    //最后要加end（）结束，不然客户端一直等待
    response.writeHead(200, {"Content-Type": "text/html"}); 
    response.write('<head><meta charset="utf-8"/></head>');
    if(request.url === '/'){
        response.end('index page');
    } else if(request.url === '/hello'){
        response.end('I am wxy ,love you');
    } else if(request.url === '/wxy'){
        let wxy = {
            name:'王馨悦',
            age:20,
            birthday:'1999-06-08',
            hobby:'邓良'
        }
        response.end(JSON.stringify(wxy))
    } else{
        response.end('404 Not Found');
    }
})

