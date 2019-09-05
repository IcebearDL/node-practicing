let http = require('http');
let fs = require('fs');
let urlencode = require('urlencode');

let server = http.createServer();

server.listen(5000, () => console.log('服务器启动成功'));

// 模拟apache的根目录
let dir = 'C:/Users/86156/Desktop/知否-Web';

server.on('request', (request, response) => {
    console.log('收到客户端请求，请求路径为' + request.url);
    console.log(urlencode.decode(request.url.substring(1), "UTF-8"));

    //1. 读取模板
    fs.readFile('templates.html', (err, data) => {
        if (err) return response.end('404 File Not Found...');

        //2. 读取文件目录 
        fs.readdir(dir, (err, files) => {
            if (err) return response.end('Can not read file...');

            //2.1 读取文件目录创建字符串
            let content = '';
            files.forEach(item => {
                content += `
                <tr>
                    <td data-value=".idea/"><a class="icon dir"
                            href="/C:/Users/86156/Desktop/%E7%9F%A5%E5%90%A6-Web/.idea/">${item}/</a></td>
                    <td class="detailsColumn" data-value="0"></td>
                    <td class="detailsColumn" data-value="1565575936">2019/8/12 上午10:12:16</td>
                </tr>
                `;
            })

            // 3. 替换模板
            //data这里读取进来的是二进制数据
            //使用toString转换为字符串
            data = data.toString().replace('^_^', content);

            // 4. 返回响应
            response.end(data);
        })
    })

    // fs.readdir用于读取目录使用
    // fs.readdir('C:/Users/86156/Desktop/知否-Web', (err, files) => {
    //     if (err) console.log('该目录不存在...');
    //     console.log(files);
    // })
})