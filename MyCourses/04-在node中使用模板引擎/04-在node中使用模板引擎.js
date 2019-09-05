//使用art-templates
//在浏览器中也可以使用
//模板引擎最早就是诞生于服务器领域，后来才发展到了前端

//1. npm install art-template
//2. require('art-template')
const http = require('http');
const fs = require('fs');
const template = require('art-template');

// 模拟apache的根目录
const dir = 'C:/Users/86156/Desktop/知否-Web';

let server = http.createServer();

server.listen(5000, console.log('服务器启动成功'));

server.on('request', (request, response) => {
    console.log('请求地址为：' + request.url);
    if (request.url !== '/template') return response.end('404 Not Found...')

    const asyncReadFile = new Promise(resolve => {
        fs.readFile('templates.html', (err, data) => {
            if (err) {
                response.end('Cant Open File...');
                throw new Error(err);
            }
            resolve(data);
        })
    })

    asyncReadFile.then((data) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                response.end('Cant find dir...');
                throw new Error(err);
            }

            //这里不是浏览器
            //template('script 标签 id'，{对象})
            //这里使用art-template模板渲染库在nodejs中的用法
            let ret = template.render(data.toString(), { file: files })
            response.end(ret);
        })
    }).catch((err)=>{
        console.error(err);
    })

})