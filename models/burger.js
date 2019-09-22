var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    insert: function(burgerName, cb) {
        orm.insertOne('burgers', burgerName, function(res) {
            cb(res);
        });
    },

    update: function(devour, id, cb) {
        orm.updateOne('burgers', devour, id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;