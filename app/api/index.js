
module.exports = ctx => {
    let {url, method} = ctx.req;
    let {resCtx, reqCtx} = ctx;

    let apiMap = {
        '/list.action': ['西风多少恨，吹不散眉弯'],
        '/user.action': ['而今空唱雨淋霖']
    };
    method = method.toLowerCase();
    return Promise.resolve({
        then: (resolve, reject) => {
            if (method === 'get') {
                resCtx.body = apiMap[url];
            } else {
                //处理post
                let {body} = reqCtx;
                resCtx.body = body;
            }
            resolve()
        }
    })
}