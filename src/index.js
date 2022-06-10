const http = require('http');
const db = require('./database');
require('dotenv').config();

db.makeConnection(process.env.MYSQL_HOST, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, process.env.MYSQL_DATABASE);

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Hello Node.js!');
})

server.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}...`);
})
