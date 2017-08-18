
module.exports = (url, method) => {
    let apiMap = {
        '/list.action': ['百里守约', '露娜', '老夫子'],
        '/user.action': ['ChrisWen', '男', '中国人']
    }
    method = method.toLowerCase();
    if (method === 'get') {
        return Promise.resolve(apiMap[url]);
    } else {
        //处理post

    }


}