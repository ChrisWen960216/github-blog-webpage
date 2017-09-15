/* Created By ChrisWen
 * 17/8/21
 * 处理客户端数据
 */

//url: query + body + method
//在 req.context 上挂载数据并且 resolve
/**  context = {
 *              req: req,
 *              reqCtx: {},
 *              res: res,
 *              resCtx: {}
 *          }
 */

module.exports = ctx => {
    let {method, url} = ctx.req;
    let {reqCtx} = ctx;
    method = method.toLowerCase();
    return Promise.resolve({
        then: (resolve, reject) => {
            if (method === 'post') {
                let data = '';
                //paused => flow
                ctx.req.on('data', (chunk) => {
                    data += chunk;
                }).on('end', () => {
                    //resolve(JSON.parse(data)) //body
                    reqCtx.body = JSON.parse(data);
                    //通知下一个流程
                    resolve();
                });
            } else {
                resolve();
            }

        }
    })

}