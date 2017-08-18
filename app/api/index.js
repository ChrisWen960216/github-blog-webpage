
module.exports = (url) => {
    let apiMap = {
        '/list.action': ['百里守约', '露娜', '老夫子'],
        '/user.action': ['ChrisWen', '男', '中国人']
    }
    return Promise.resolve(apiMap[url]);

}