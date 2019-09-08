const http = require('http');
const fs = require('fs');
const template = require('art-template');
const server = http.createServer();
server.listen(5000, console.log('启动服务器成功！'))

server.on('request', (request, response) => {
    request.url !== '/favicon.ico' ? console.log('请求地址为：' + request.url) : null;

    if(request.url === '/feedback'){
        //主留言页面
        fs.readFile('feedback.html',(err,data)=>{
            if(err) return response.end('Cant Open File...');

            let htmlStr = template.render(data.toString(),{
                notes:[
                    {
                        author:'dl',
                        time:'昨天',
                        text:'我爱王美丽'
                    },
                    {
                        author:'dl',
                        time:'昨天',
                        text:'我爱王美丽'
                    }
                ]
            })
            
            response.setHeader("Content-Type","text/html;charset=utf-8");
            response.end(htmlStr);
        })
    }else if(request.url === '/feedback/notes'){
        //跳转至写留言页面

    }else{
        response.end('404 Index Page Not Found...')
    }
})