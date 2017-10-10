/**
 * 创建 Schema
 * Created By ChrisWen
 * 17/10/10
 */
const {Schema} = require('mongoose');

// 创建博客数据存储 Schema
exports.blogSchema = new Schema({
    title: String,
    content: String, // HTML
    rawContent: String, // MARKDOWN
    category: String, // 分类
    date: { type: String, default: () => { return new Date().toLocaleString(); } }
});

exports.categorySchema = new Schema({
    category: String
});
