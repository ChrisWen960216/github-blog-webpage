/* Created By ChirsWen
 * 17/8/11
 * Main Entry
 */
const http = require('http');
const PORT = 7000;
const App = require('./app'); //find index.js ()=>./app/index.js
const Server = new App();

//中间件
const staticServer = require('./app/static-server');
const apiServer = require('./app/api');
const urlParser = require('./app/url-parser');
const viewServer = require('./app/view-server');
const cookieParser = require('./app/cookie-parser');

Server.use(cookieParser);
Server.use(urlParser);
Server.use(apiServer);
Server.use(staticServer);
Server.use(viewServer);

http.createServer(Server.initServer()).listen(PORT, () => {
    console.log(`Listening server on port ${PORT}`)
});