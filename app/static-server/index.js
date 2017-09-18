//静态资源服务
const fs = require('fs');
const path = require('path');
const mime = require('mime');

let getPath = url => path.resolve(process.cwd(), 'public', `.${url}`);

let staticFunction = ctx => {
    let {url} = ctx.req;
    let {resCtx} = ctx;
    return new Promise((resolve, reject) => {
        if (url.match(/\./) && !url.match('action')) {
            let _path = getPath(url);
            resCtx.headers = Object.assign(resCtx.headers, {
                'Content-Type': mime.getType(_path)
            })
            let body = fs.readFile(_path, (err, data) => {
                if (err) {
                    resCtx.body = `Not FOUND ${err.stack}`;
                //resolve(err)
                }
                resCtx.body = data;
                resolve();
            })
        } else {
            resolve();
        }
    })
}
module.exports = staticFunction