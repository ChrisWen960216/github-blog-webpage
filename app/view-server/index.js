/** Created By ChrisWen
 *  17/09/18
 *  view-server
 */

//映射表


//ejs动态渲染数据
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const urlrewriteMap = require('./urlrewrite');

module.exports = ctx => {
    let {req, resCtx} = ctx;
    let {url} = req;
    return Promise.resolve({
        then: (resolve, reject) => {
            const viewPath = path.resolve(__dirname, 'ejs');
            let ejsName = urlrewriteMap[url];
            if (ejsName) {
                let htmlPath = path.resolve(viewPath, ejsName + '.ejs');
                let html = fs.readFileSync(htmlPath, 'utf8');
                resCtx.headers = Object.assign(resCtx.headers, {
                    'Content-Type': 'text/html'
                });
                resCtx.body = html;
                resolve();
            } else {
                resolve();
            }

        //let viewPath = path.resolve(process.cwd(), 'public');
        // if (urlMap[url]) {
        //     let {viewName} = urlMap[url];
        //     let htmlPath = path.resolve(viewPath, viewName);
        //     resCtx.headers = Object.assign(resCtx.headers, {
        //         'Content-Type': mime.getType(htmlPath)
        //     });
        //     let tempStr = fs.readFileSync(htmlPath, 'utf8');
        //     let render = ejs.compile(tempStr, {
        //         compileDebug: true
        //     });
        //     resCtx.body = render();
        //     resolve();
        // } else {
        //     resolve();
        // }
        }
    })
}