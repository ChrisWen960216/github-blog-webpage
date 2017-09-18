const path = require('path');
const ejs = require('ejs');

const html = `Hello<%- World%>`;
const World = 'xxx';

const f1 = ejs.compile(html);
console.log(f1);

const finalStr = f1({
    World
});
console.log(finalStr);