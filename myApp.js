var express = require('express');
var app = express();
var bodyParser = require("body-parser");


require('dotenv').config()

app.use('/public', express.static(__dirname + "/public"))


app.use( bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use( function middleware(req, res, next) {
  // Do something
  // Call the next function in line:
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});



app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
});








app.get('/now', function(req, res, next) {
  req.time = new Date().toString();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  
  res.send({
    time: req.time
  });

});




app.get('/:word/echo', (req, res) => {
  const {word} = req.params
  res.json({"echo": word});


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
