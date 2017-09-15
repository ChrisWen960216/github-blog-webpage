/* 核心逻辑入口
 * CenterLogical Entry
 */

//fs 文件I/O
const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
const apiServer = require('./api');
const urlParser = require('./url-parser');
class App {
    constructor() {}
    //高阶函数
    //process.cwd() 路径相对于本项目 node 的启动环境
    initServer() {
        //初始化工作
        //...
        return (req, res) => {
            let {method} = req;

            //返回的字符串
            //let body = '';
            //请求头部
            //let headers = {};

            //以 action 结尾的 url 认为是 ajax
            //返回字符串或者buffer
            req.context = {
                body: '',
                query: {},
                method: 'get'
            };
            //抽象一个模型 用来统一挂载模型
            let context = {
                req: req,
                reqCtx: {
                    body: '', //post请求的数据
                    query: {} //处理客户端 get 请求
                },
                res: res,
                resCtx: {
                    headers: {}, //response 返回报文
                    body: '' //返回给前端内容区
                }
            };
            //Promise + request + response
            urlParser(context).then(() => {
                return apiServer(context)
            }).then(() => {
                return staticServer(context)
            }).then(() => {
                let base = {
                    'X-powered-by': 'Node.js'
                }
                let {body} = context.resCtx;
                res.writeHead(200, 'resolve ok', base)
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