/** Created By ChrisWen
 *  17/09/18
 *  view-server
 */

//映射表


//ejs动态渲染数据
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

module.exports = ctx => {
    let {req, resCtx} = ctx;
    let {url} = req;
    return Promise.resolve({
        then: (resolve, reject) => {
            let urlMap = {
                '/': {
                    viewName: 'index.html'
                },
                '/about': {
                    viewName: 'about.html'
                }
            };
            let viewPath = path.resolve(process.cwd(), 'public');
            if (urlMap[url]) {
                let {viewName} = urlMap[url];
                let htmlPath = path.resolve(viewPath, viewName);
                let render = ejs.compile(fs.readFileSync(htmlPath, 'utf8'), {
                    compileDebug: true
                });
                resCtx.body = render();
                resolve();
            } else {
                resolve();
            }
        }
    })
}