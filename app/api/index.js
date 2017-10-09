
module.exports = ctx => {
  const {pathname} = ctx.reqCtx;
  let {method} = ctx.req;
  const {resCtx, reqCtx} = ctx;

  const apiMap = {
    '/list.action': ['西风多少恨，吹不散眉弯'],
    '/user.action': ['而今空唱雨淋霖']
  };
  method = method.toLowerCase();
  return Promise.resolve({
    then: (resolve, reject) => {
      // 理论上只处理 action
      if (pathname.match('action')) {
        if (method === 'get') {
          resCtx.body = JSON.stringify(apiMap[pathname]);
        } else {
        // 处理post
          const {body} = reqCtx;
          resCtx.body = JSON.stringify(body);
        }
        resCtx.headers = Object.assign(resCtx.headers, {'Content-Type': 'application/json'});
        // res.setHeader("Content-Type", "application/json");
      }
      resolve();
    }
  });
};
