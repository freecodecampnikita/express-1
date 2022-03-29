var express = require('express');
var app = express();
require('dotenv').config()

app.use('/public', express.static(__dirname + "/public"))


app.use( function middleware(req, res, next) {
  // Do something
  // Call the next function in line:
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});


app.get('/', function routeHandler(req, res) {
  // res.send('Hello Express');
  res.sendFile(__dirname + '/views/index.html');

});


app.get('/json', function routeHandler(req, res) {
  // res.send('Hello Express');

  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  };

  res.json({"message": response});

});





console.log("Hello World");

































 module.exports = app;
