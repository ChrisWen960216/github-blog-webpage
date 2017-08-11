//静态资源服务
const fs = require('fs');
const path = require('path');
let getPath = url => {
    return path.resolve(process.cwd(), 'public', `.${url}`);
}

let staticFunction = url => {
    let map = {
        '/': '/index.html',
        '/about': '/about.html',
        '/list': '/list.html'
    }
    url = map[url] || url

    let _path = getPath(url);
    let body = '';
    try {
        body = fs.readFileSync(_path);
    } catch (error) {
        body = '404'
    }
    return body;
}
module.exports = staticFunction