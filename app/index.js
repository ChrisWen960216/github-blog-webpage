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
            //分发 url代码,绝对路径,DRY
            // let getPath = (url) => {
            //     return path.resolve(process.cwd(), 'public', `.${url}`);
            // }
            //以 action 结尾的 url 认为是 ajax
            if (url.match('action')) {
                let body = apiServer(url);
                res.writeHead(200, 'Resolve OK', {
                    'X-powered-by': 'NodeJS',
                    'Content-Type': 'application/json'
                });
                res.end(JSON.stringify(body));
            } else {
                let body = staticServer(url);
                res.writeHead(200, 'Resolve OK', {
                    'X-powered-by': 'NodeJS'
                });
                res.end(body);
            }

        //staticFunction(url);
        }
    }
}

/* var App = function(){}
*  App.prototype.initServer = (res,res)=>{
    ...
}
*/

module.exports = App