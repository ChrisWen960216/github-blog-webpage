/**
 * 采用 mongoose 处理Ajax
 * Created By ChrisWen
 */
const Router = require('./router');
const {$saveBlog, $saveCategory} = require('./mongo');
// 分类列表
Router.get('/category.action', ctx => {
    const category = ctx.reqCtx.query;
    return $saveCategory(category);
});
// 添加博客
Router.post('/blog.action', ctx => {
    const blog = ctx.reqCtx.body;
    return $saveBlog(blog);
});
module.exports = Router;
