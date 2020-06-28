var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// var logger = function(req, res, next) {
//   console.log("logging...");
//   next();
// };

// app.use(logger);

// View engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
