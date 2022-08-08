//搭建服务器
const blog = require('./src/routes/blog')

const querystring = require('querystring')
const { resolve } = require('path')
//拿到http请求post过来的数据
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        //保证是post并且是JSON数据
        if (req.method !== 'POST') {
            resolve({});
            return;
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({});
            return;
        }
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            //如果是空的也要返回
            if (!postData) {
                resolve({});
                return;
            }
            //把JSON数据转换成对象
            resolve(JSON.parse(postData))
        })
    })
    return promise


}
const severHandler = (req, res) => {
    //设置响应头接受什么类型的数据
    res.setHeader('Content-Type', 'application/json');
    //路径
    const url = req.url;
    req.path = url.split('?')[0];
    //query,querystring.parse:字符串->对象
    req.query = querystring.parse(url.split('?')[1])

    getPostData(req).then((postData) => {
        req.body = postData;
        //routes/blog.js过来的数据是promise形式
        const responseDatePromise = blog(req, res);

        if (responseDatePromise) {
            responseDatePromise.then(data => {
                res.end(
                    JSON.stringify(data)
                )

            })
            return;
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });//重文本
        res.write('404 Not Found');
        res.end();

    })



}
module.exports = severHandler;