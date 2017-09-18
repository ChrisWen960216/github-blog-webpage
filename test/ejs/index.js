const path = require('path');
const ejs = require('ejs');

const html = `Hello<%- World %>`;
//const World = 'xxx';

/*
 * EJS.compile ===> 将字符串转换成 Function
 * locals => 'hello' + locals.World
 */
const f1 = ejs.compile(html);
console.log(f1);

/* <% %> 逻辑运算
 * <%- %> unescape
 * <%= %> escape
 */

const finalStr = f1({
    World: 'Great'
});
console.log(finalStr);