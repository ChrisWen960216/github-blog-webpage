const path = require('path');
const ejs = require('ejs');

const html = `Hello<%- include('./test') %>`;
//const World = 'xxx';

/*
 * EJS.compile ===> 将字符串转换成 Function
 * locals => 'hello' + locals.World
 */
const f1 = ejs.compile(html, {
    filename: path.resolve(__filename),
    compileDebug: true
});
console.log(f1);

/* <%  %> 逻辑运算
 * <%- %> unescape
 * <%= %> escape
 */
