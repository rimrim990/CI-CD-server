const mysql = require('mysql');

const makeConnection = (host, user, password, database) => {
    const connection = mysql.createConnection({
        host, user, password, database
    });

    connection.connect();

    connection.query(`SELECT * FROM Users`, (err, rows, fields) => {
        if (err) throw err;
        console.log(`User info is ${rows}`);
    });

    connection.end();
};

module.exports = {
    makeConnection
}

