// 静态资源服务
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const getPath = pathname => path.resolve(process.cwd(), 'public', `.${pathname}`);

const staticFunction = ctx => {
    const {pathname} = ctx.reqCtx;
    const {resCtx} = ctx;
    return new Promise((resolve, reject) => {
        if (pathname.match(/\./) && !pathname.match('action')) {
            const _path = getPath(pathname);
            resCtx.headers = Object.assign(resCtx.headers, {
                'Content-Type': mime.getType(_path)
            });
            const body = fs.readFile(_path, (err, data) => {
                if (err) {
                    resCtx.body = `Not FOUND ${err.stack}`;
                }
                resCtx.body = data;
                resolve();
            });
        } else {
            resolve();
        }
    });
};
module.exports = staticFunction;
