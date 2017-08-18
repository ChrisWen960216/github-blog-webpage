# NodeBlog
> This is the node blog created by ChrisWen.

## 1. Common.JS 规范
+ ### 模块引用： 
  在 CommonJS 规范中存在这个 `require()` 方法，接收模块标识，引入API到上下文中。
  ```js
  var math = require('math')
  ```
+ ### 模块定义
  在模块中，上下文提供`require()`方法引入外部模块，同时提供了`exports`对象用于导出当前模块的方法或者变量，且是唯一的出口。亦存在一个`module`对象，代表自身。

+ ### 模块标识
  模块标识就是传递给`require()`方法的参数，必须符合小驼峰命名的字符串，或者是.、..开头的相对路径、绝对路径，可以没有后缀名.js。

## 2. Node.JS 模块实现
1. ### 核心模块：
   加载速度最快，优先级仅次于缓存加载。
2. ### 自定义模块：
   非核心模块，也不是路径形式的标识符。特殊的文件模块，可能是一个文件，也可能是一个包。其模块路径的生成规则是：
   + 当前目录下的 node_modules 模块
   + 父目录下的 node_modules 模块
   + 父目录/父目录下的 node_modules 模块
   + 逐渐递归...直到根目录下的 node_modules 模块
3. ### __filename 和 __dirname
   在对 JS 文件的编译中，Node.JS 会自动用一个函数来包裹所对应的文件：

   ```js
   (function(exports,require,module,__filname,__dirname){
       ...
   })
   ```
   在执行之后，模块的 `exports` 属性被返回给调用方，其上的任何方法和属性都能被外部调用到，但是包裹的模块内的其余变量、属性都不能被直接调用。

## 3. 核心模块
1. ### FileSystem
   `fs`提供2种加载文件的方式，同步/异步加载。异步加载需要提供一个回调函数，部分情况下用来抛出异常。而同步加载则没有回调函数的概念（出错将会立即抛出暂停）。考虑到程序会有若干繁忙的进程，应尽量使用异步加载来避免阻塞进程：
   ```js
   const fs = require('fs');
   fs.rename('/tmp/hello', '/tmp/world', (err) => {
   if (err) throw err;
   fs.stat('/tmp/world', (err, stats) => {
     if (err) throw err;
     console.log(`文件属性: ${JSON.stringify(stats)}`);
   });
   });
   ```
## 4. Promise
1. ### 用于一个异步操作的最终完成/失败及其结果的标识。
   ```js
   new Promise(function(resolve,reject){...})
   ```
2. ### 三个状态
   - pending `()=>{}`
   - rejected `(reject)=>{}`
   - fulfilled `(resolve,reject)=>{}`

3. ### 原型和方法
   - Promise.prototype.then
   - Promise.prototype.catch

