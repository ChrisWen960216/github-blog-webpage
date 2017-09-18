const assert = require('assert');

const encodingTest = 'hello world';
let buf1 = Buffer.from(encodingTest, 'utf8');
console.log(buf1);