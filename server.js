var express = require('express');
var orm = require('./config/orm');
var exphbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('index');
})

app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
})