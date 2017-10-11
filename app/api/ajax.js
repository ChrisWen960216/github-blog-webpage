/**
 * 采用 mongoose 处理Ajax
 * Created By ChrisWen
 */
const Router = require('./router');
const {$saveBlog, $saveCategory, $getCategory} = require('./mongo');
// 分类列表
Router.post('/category.action', ctx => {
    const category = ctx.reqCtx.body;
    return $saveCategory(category);
});
Router.get('/categoryList.action', ctx => {
    const {query} = ctx.reqCtx;
    return $getCategory(query);
})
// 添加博客
Router.post('/blog.action', ctx => {
    const blog = ctx.reqCtx.body;
    return $saveBlog(blog);
});
module.exports = Router;
