var mysql = require ('mysql');

var connection = mysql.createConnection({
    host: 'otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'jsdg7r9vvu6yediv',
    password: 'qo9pejdqhwo6hwh8',
    database: '	p67zncgwksd6uh29'
})

connection.connect(function(err) {
    if (err) {
        console.log('error connecting: ' + err.stack);
    }
    console.log('connected as id ' + connection.threadId);
})

module.exports = connection;