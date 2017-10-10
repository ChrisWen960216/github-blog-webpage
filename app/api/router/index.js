/** 
 * 创建路由模块
 * Created By ChrisWen
 * 17/10/10
 */
class Router {
    constructor() {
        this.routerMap = {
            'get': {},
            'post': {}
        };
    }

    get(pathname, handler) {
        const getMap = this.routerMap.get;
        getMap[pathname] = handler;
    }

    post(pathname, handler) {
        const postMap = this.routerMap.post;
        postMap[pathname] = handler;
    }

    // 对接 req,res
    routes(ctx) {
        const {pathname, method} = ctx.reqCtx;
        if (method === 'get' || method === 'post') {
            const handler = this.routerMap[method][pathname];
            return Promise.resolve(handler(ctx));
        } else {
            return Promise.resolve();
        }
    }
}

module.exports = Router;
