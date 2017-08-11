/* Created By ChirsWen
 * 17/8/11
 */
const http = require('http');
const PORT = 7000;
const App = require('./app'); //find index.js ()=>./app/index.js
const Server = new App();
http.createServer(Server.initServer()).listen(PORT, () => {
    console.log(`Listening server on port ${PORT}`)
});