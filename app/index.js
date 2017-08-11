/* 核心逻辑入口
*
*/

//fs 文件I/O
const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
class App {
    constructor() {}
    // initServer(req, res) {
    //     fs.readFile('./public/index.html', 'utf8', (err, data) => {
    //         res.end(data);
    //     })
    // }

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
            let body = staticServer(url);
            res.end(body);
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