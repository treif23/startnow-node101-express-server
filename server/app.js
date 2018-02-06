// import files and packages up here
var data = require('./data.json');

// create your express server below
var express = require('express');
var app = express();
var morgan = require('morgan')

var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
});
// add your routes and middleware below


app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World'); 
});

app.get('/data', function (req, res) {
   res.send(data);
})

// finally export the express application
module.exports = app;
