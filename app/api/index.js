// 设定路由
const Router = require('./router');
// 分类列表
Router.get('/categoryList.action', ctx => {
});
// 博客列表
Router.get('/blog.action', ctx => {
});

module.exports = ctx => {
    const {pathname} = ctx.reqCtx;
    let {method} = ctx.req;
    const {resCtx, reqCtx} = ctx;
    method = method.toLowerCase();
    return Promise.resolve({
        then: (resolve, reject) => {
            // 理论上只处理 action
            if (pathname.match('action')) {
                if (method === 'get') {
                    // resCtx.body = JSON.stringify(apiMap[pathname]);
                } else {
                    // 处理post
                    const {body} = reqCtx;
                    resCtx.body = JSON.stringify(body);
                }
                resCtx.headers = Object.assign(resCtx.headers, {
                    'Content-Type': 'application/json'
                });
            // res.setHeader("Content-Type", "application/json");
            }
            resolve();
        }
    });
};
