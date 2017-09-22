/** Created By ChrisWen
 *  17/09/22
 *  处理 CookieParser
 */
const cookie_parser = require('cookie');

module.exports = ctx => {
    let {url} = ctx.req;
    let {cookie} = ctx.req.headers;
    let {resCtx, res} = ctx;
    let cookieObj = cookie_parser.parse(cookie);
    return Promise.resolve({
        then: (resolve, reject) => {
            //实现白名单
            if (cookieObj['authd']) {
                resCtx.hasUser = true;
            }
            const whiteNameList = ['/name_ChrisWen'];
            let cookieStr = time => `authd=hello;Max-Age=${time}`;
            if (whiteNameList.indexOf(url) > -1) {
                res.setHeader('Set-Cookie', cookieStr(36000));
            }
            if (url === '/logout') {
                res.setHeader('Set-Cookie', cookieStr(0));
            }
            resolve();
        }
    })

}