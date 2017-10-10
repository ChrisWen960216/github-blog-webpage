/**
 * 采用 mongoose 处理Ajax
 * Created By ChrisWen
 */
const Router = require('./router');
// 分类列表
Router.get('/categoryList.action', ctx => {
    return {
        a: 2
    };
});
// 添加博客
Router.post('/blog.action', ctx => {
});
module.exports = Router;
