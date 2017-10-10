// 设定路由
const Router = require('./router');
require('./ajax');
module.exports = ctx => {
    const {pathname} = ctx.reqCtx;
    const {resCtx, reqCtx, res} = ctx;

    let {method} = ctx.req;
    method = method.toLowerCase();

    return Promise.resolve({
        then: (resolve, reject) => {
            // 理论上只处理 action
            if (pathname.match('action')) {
                return Router.routes(ctx).then(val => {
                    resCtx.body = JSON.stringify(val);
                    resCtx.headers = Object.assign(resCtx.headers, {
                        'Content-Type': 'application/json'
                    });
                    resolve();
                });
            }
            resolve();
        }
    });
};
