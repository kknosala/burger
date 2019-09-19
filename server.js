var express = require('express');
var orm = require('./config/orm');

var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.jason());

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars');