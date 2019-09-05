//使用art-templates
//在浏览器中也可以使用
//模板引擎最早就是诞生于服务器领域，后来才发展到了前端

//1. npm install art-template
//2. require('art-template')
const http = require('http');
const fs = require('fs');
const template = require('art-template');
const urlencode = require('urlencode');

let server = http.createServer();

server.listen(5000, console.log('服务器启动成功'));

server.on('request', (request, response) => {
    request.url !== '/favicon.ico' ? console.log('请求地址为：' + urlencode.decode(request.url)) : null;
    if (request.url === '/') return response.end('404 Index Page Not Found...')

    //每次请求的目录
    const dir = urlencode.decode(request.url).slice(1);

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
                // console.error(err);
            }

            //这里不是浏览器
            //template('script 标签 id'，{对象})
            //这里使用art-template模板渲染库在nodejs中的用法
            let ret = template.render(data.toString(), {
                dir: dir,
                files: files
            })
            response.end(ret);
        })
    }).catch((err) => {
        console.error(err);
    })

})