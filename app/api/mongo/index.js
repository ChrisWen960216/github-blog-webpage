/**
 * Created By ChrisWen
 * 创建Model
 * 17/10/10
 */

const mongoose = require('mongoose');
const {blogSchema, categorySchema} = require('./schema');

const BlogModel = mongoose.model('Blog', blogSchema);
const CategoryModel = mongoose.model('Category', categorySchema);

const $saveBlog = blog => {
    const condition = {title: blog.title};
    return BlogModel.findOneAndUpdate(condition, blog, {upsert: true, new: true})
        .then(_blog => {
            return {
                status: 1,
                data: _blog
            };
        });
};

// upsert --- 如果没有，就新增加一个;
// new --- 返回更新后的值;
const $saveCategory = category => {
    return CategoryModel.findOneAndUpdate({name: category.name}, category, {upsert: true, new: true})
        .then(_category => {
            return {
                status: 1,
                data: _category
            };
        });
};

const $getCategory = query => {
    return CategoryModel.find(query).exec().then(_categoryList => {
        return {
            status: 1,
            data: _categoryList
        };
    });
};

const $getBlogDetail = query => {
    const {id} = query;
    return BlogModel.findOne({_id: id}).exec().then(_blog => {
        return {
            status: 1,
            data: _blog
        };
    });
};

const $getBlogList = query => {
    return BlogModel.find(query).exec().then(_blog => {
        return {
            status: 1,
            data: _blog
        }
    })
}

module.exports = {$saveBlog, $saveCategory, $getCategory, $getBlogDetail, $getBlogList};
