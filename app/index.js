/* 核心逻辑入口
*
*/

//fs 文件I/O
const fs = require('fs');

class App {
    constructor() {}
    // initServer(req, res) {
    //     fs.readFile('./public/index.html', 'utf8', (err, data) => {
    //         res.end(data);
    //     })
    // }

    //高阶函数
    initServer() {
        //初始化工作
        //...
        return (req, res) => {
            //process.cwd() 路径相对于本项目 node 的启动环境
            fs.readFile('./public/index.html', 'utf8', (err, data) => {
                res.end(data);
            })
        }
    }
}

/* var App = function(){}
*  App.prototype.initServer = (res,res)=>{
    ...
}
*/

module.exports = App