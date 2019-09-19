var connection = require('./connection');

var orm = {
    selectAll: function(tableName) {
        var queryString = 'SELECT * FROM ??;';
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },

    insertOne: function(tableName, burgerName) {
        var queryString = 'INSERT INTO ?? (burger_name) VALUES (?)';
        connection.query(queryString, [tableName, burgerName], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },

    updateOne: function(tableName, devoureUpdate, id) {
        var queryString = 'UPDATE ?? SET devoured = ? HWERE id = ?';
        connection.query(queryString, [tableName, devoureUpdate, id], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
    
}

module.exports = orm;