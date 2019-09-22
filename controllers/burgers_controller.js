var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(data) {
        res.render('index', {burgers: data} )
    })
})

router.post('/api/burgers', function(req, res) {
    console.log(req.body);
    burger.insert([
        req.body.name
    ], function(result) {
        res.json( { id: result.insertedId } )
    })
})

module.exports = router;