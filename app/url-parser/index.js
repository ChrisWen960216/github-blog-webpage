/* Created By ChrisWen
 * 17/8/21
 * 处理客户端数据
 */

//url: query + body + method
//在 req.context 上挂载数据并且 resolve

module.exports = (req) => {
    let {method, url, context} = req;
    method = method.toLowerCase();
    return Promise.resolve({
        then: (resolve, reject) => {
            context.method = method;
            context.query = {};
            if (method === 'post') {
                let data = '';
                //paused => flow
                req.on('data', (chunk) => {
                    data += chunk;
                }).on('end', () => {
                    //resolve(JSON.parse(data)) //body
                    context.body = JSON.parse(data);
                    resolve();
                });
            } else {
                resolve();
            }

        }
    })

}