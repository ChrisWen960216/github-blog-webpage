const http = require('http');
const PORT = 7000;
http.createServer((req, res) => {
    res.end('Runing Now!')
}).listen(PORT, () => {
    console.log(`Listening server on port ${PORT}`)
});