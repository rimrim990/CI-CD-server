const http = require('http');

PORT = 3001

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Hello Node.js!');
})

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}...`);
})
