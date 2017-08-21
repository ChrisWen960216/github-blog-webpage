
module.exports = (req) => {
    let {url, method} = req;
    let apiMap = {
        '/list.action': ['西风多少恨，吹不散眉弯'],
        '/user.action': ['而今空唱雨淋霖']
    }
    method = method.toLowerCase();
    if (method === 'get') {
        return Promise.resolve(apiMap[url]);
    } else {
        //处理post

        return new Promise((resolve, reject) => {
            let data = ''
            req.on('data', (chunk) => {
                data += chunk;
            }).on('end', () => {
                resolve(data)
            });
        })
    }


}