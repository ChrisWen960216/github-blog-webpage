// 设定路由
const Router = require('./ajax');

module.exports = ctx => {
    const {resCtx, reqCtx} = ctx;
    const {pathname} = reqCtx;
    if (!pathname.match(/\.action/)) {
        return Promise.resolve();
    }
    return Router.routes(ctx).then(val => {
        if (val) {
            resCtx.statusCode = 200;
            resCtx.headers = Object.assign(resCtx.headers, {
                'Content-Type': 'application/json'});
            resCtx.body = JSON.stringify(val);
        }
    }).catch(err => {
        resCtx.statusCode = 400;
        resCtx.body = `${err.name} + ${err.stack}`;
    });
};
