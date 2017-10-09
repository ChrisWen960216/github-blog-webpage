/* Created By ChrisWen
 * 17/8/21
 * 处理客户端数据
 */

// url: query + body + method
// 在 req.context 上挂载数据并且 resolve
const Url = require('url');
module.exports = ctx => {
  let {method} = ctx.req;
  const {url} = ctx.req;
  const {reqCtx} = ctx;
  Object.assign(reqCtx, Url.parse(url, true));
  method = method.toLowerCase();
  return Promise.resolve({
    then: (resolve, reject) => {
      if (method === 'post') {
        const data = [];
        // paused => flow
        ctx.req.on('data', (chunk) => {
          data.push(chunk);
        }).on('end', () => {
          const endData = Buffer.concat(data).toString();
          reqCtx.body = JSON.parse(endData);
          // 通知下一个流程
          resolve();
        });
      } else {
        resolve();
      }
    }
  });
};
