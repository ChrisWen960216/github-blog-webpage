/* 核心逻辑入口
*
*/

//fs 文件I/O
const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
const apiServer = require('./api');

class App {
    constructor() {}

    //高阶函数
    //process.cwd() 路径相对于本项目 node 的启动环境
    initServer() {
        //初始化工作
        //...
        return (req, res) => {
            let {url} = req;

            //返回的字符串
            let body = '';
            //请求头部
            let headers = {};

            //以 action 结尾的 url 认为是 ajax
            //返回字符串或者buffer

            //如何把ApiServer 和 staticServer 连接起来
            if (url.match('action')) {
                apiServer(url).then(val => {
                    body = JSON.stringify(val);
                    headers = {
                        'Content-Type': 'application/json'
                    }
                    let finalHeader = Object.assign(headers, {
                        'X-powered-by': 'Node.js'
                    })
                    res.writeHead(200, 'resolve ok', finalHeader)
                    res.end(body);
                })

            } else {
                staticServer(url).then((body) => {
                    let finalHeader = Object.assign(headers, {
                        'X-powered-by': 'Node.js'
                    })
                    res.writeHead(200, 'resolve ok', finalHeader)
                    res.end(body);
                });
            }
            // let finalHeader = Object.assign(headers, {
            //     'X-powered-by': 'Node.js'
            // })
            // res.writeHead(200, 'resolve ok', finalHeader)
            // res.end(body);

        }
    }
}

/* var App = function(){}
*  App.prototype.initServer = (res,res)=>{
    ...
}
*/

module.exports = App