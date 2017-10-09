/** Created By ChrisWen
 *  17/09/18
 *  view-server
 */

// 映射表
// ejs动态渲染数据
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
// const mime = require('mime');
const urlrewriteMap = require('./urlrewrite');

module.exports = ctx => {
  const {req, resCtx} = ctx;
  const {url} = req;
  return Promise.resolve({
    then: (resolve, reject) => {
      if (url.match('action') || url.match(/\./)) {
        resolve();
      } else {
        const viewPath = path.resolve(__dirname, 'ejs');
        const ejsName = urlrewriteMap[url];
        if (ejsName) {
          const layoutPath = path.resolve(viewPath, 'layout.ejs');
          const layoutHtml = fs.readFileSync(layoutPath, 'utf8');
          const render = ejs.compile(layoutHtml, {
            compileDebug: true,
            filename: layoutPath
          });
          const html = render({
            templateName: ejsName,
            hasUser: resCtx.hasUser
          });
          resCtx.headers = Object.assign(resCtx.headers, {
            'Content-Type': 'text/html'
          });
          resCtx.body = html;
          resolve();
        } else {
        // 重定向
          resCtx.headers = Object.assign(resCtx.headers, {
            'Location': '/'
          });
          resCtx.statusCode = 302;
          resCtx.statusMessage = 'Redirect';
          resCtx.body = '';
          resolve();
        }
      }
    }
  });
};
