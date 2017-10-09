/** Created By ChrisWen 
 *  17/09/22
 *  处理 CookieParser
 */
const cookieParser = require('cookie');
module.exports = ctx => {
  const {url} = ctx.req;
  const {cookie} = ctx.req.headers;
  const {resCtx, res} = ctx;
  const whiteNameList = ['/name_ChrisWen'];

  const cookieObj = cookieParser.parse(cookie);
  const cookieStr = time => `authd=hello;Max-Age=${time}`;
  return Promise.resolve({
    then: (resolve, reject) => {
      // 实现白名单
      if (cookieObj['authd']) {
        resCtx.hasUser = true;
        res.setHeader('Set-Cookie', cookieStr(3600));
      }
      if (whiteNameList.indexOf(url) > -1) {
        res.setHeader('Set-Cookie', cookieStr(3600));
      }
      if (url === '/logout') {
        res.setHeader('Set-Cookie', cookieStr(0));
      }
      resolve();
    }
  });
};
