// 静态资源服务
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const getPath = url => path.resolve(process.cwd(), 'public', `.${url}`);

const staticFunction = ctx => {
  const {url} = ctx.req;
  const {resCtx} = ctx;
  return new Promise((resolve, reject) => {
    if (url.match(/\./) && !url.match('action')) {
      const _path = getPath(url);
      resCtx.headers = Object.assign(resCtx.headers, {'Content-Type': mime.getType(_path)});
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
