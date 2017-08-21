
module.exports = (req) => {
    let {url, method, context} = req;
    let apiMap = {
        '/list.action': ['西风多少恨，吹不散眉弯'],
        '/user.action': ['而今空唱雨淋霖']
    }
    method = method.toLowerCase();
    if (method === 'get') {
        return Promise.resolve(apiMap[url]);
    } else {
        //处理post
        let {body} = context;
        return Promise.resolve(body);
    }


}