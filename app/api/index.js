
module.exports = ctx => {
    let {url, method} = ctx.req;
    let {resCtx, reqCtx} = ctx;
    let {res} = ctx;

    let apiMap = {
        '/list.action': ['西风多少恨，吹不散眉弯'],
        '/user.action': ['而今空唱雨淋霖']
    };
    method = method.toLowerCase();
    return Promise.resolve({
        then: (resolve, reject) => {
            // 理论上只处理 action
            if (url.match('action')) {
                if (method === 'get') {
                    resCtx.body = JSON.stringify(apiMap[url]);
                } else {
                    //处理post
                    let {body} = reqCtx;
                    resCtx.body = JSON.stringify(body);
                }
                res.setHeader("Content-Type", "application/json");
            }
            resolve();
        }
    })
}