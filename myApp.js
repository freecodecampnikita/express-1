var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + "/public"))

app.get('/', function routeHandler(req, res) {
  // res.send('Hello Express');
  res.sendFile(__dirname + '/views/index.html');

});

console.log("Hello World");

































 module.exports = app;
