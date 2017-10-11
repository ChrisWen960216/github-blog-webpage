/**
 * 创建 Schema
 * Created By ChrisWen
 * 17/10/10
 */
const {Schema} = require('mongoose');

const categorySchema = new Schema({
    name: String
});

// 创建博客数据存储 Schema
const blogSchema = new Schema({
    title: String,
    content: String, // HTML
    rawContent: String, // MARKDOWN
    category: categorySchema, // 分类
    date: { type: String, default: () => { return new Date().toLocaleString(); } }
});

module.exports = {blogSchema, categorySchema}
