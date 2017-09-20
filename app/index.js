/* 核心逻辑入口
 * CenterLogical Entry
 */

//fs 文件I/O
// const fs = require('fs');
// const path = require('path');

class App {
    constructor() {
        this.middlewareArr = [];
        //设计空的 promise
        this.middlewareChain = Promise.resolve();
    }

    use(middleware) {
        this.middlewareArr.push(middleware);
    }

    //创建Promise 链条
    composeMiddleware(context) {
        let {middlewareArr} = this;
        //根据中间件数组 创建Promise 链条
        for (let middleware of middlewareArr) {
            this.middlewareChain = this.middlewareChain.then(() => {
                return middleware(context);
            })
        }
        return this.middlewareChain;
    }

    //高阶函数
    //process.cwd() 路径相对于本项目 node 的启动环境
    initServer() {
        //初始化工作
        //...
        return (req, res) => {
            //let {url, method} = req;
            //返回的字符串
            //let body = '';
            //请求头部
            //let headers = {};

            //抽象一个模型 用来统一挂载模型
            let context = {
                req: req,
                reqCtx: {
                    body: '', //post请求的数据
                    query: {} //处理客户端 get 请求
                },
                res: res,
                resCtx: {
                    statusCode: 200, //状态码
                    statusMessage: 'Resolve OK', //状态信息
                    headers: {}, //response 返回报文
                    body: '' //返回给前端内容区
                }
            };
            //Promise + request + response
            this.composeMiddleware(context).then(() => {
                //let {body} = context.resCtx;
                //writeHeader() 会覆盖 setHeader()
                let {body, headers, statusCode, statusMessage} = context.resCtx;
                let base = {
                    'X-powered-by': 'Node.js'
                }
                res.writeHead(statusCode, statusMessage, Object.assign(base, headers));
                res.end(body);
            })
        }
    }
}
module.exports = App

/* var App = function(){}
*  App.prototype.initServer = (res,res)=>{
    ...
}
*/