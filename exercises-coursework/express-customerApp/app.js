var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var expressValidator = require("express-validator");
var mongojs = require("mongojs");
var db = mongojs("customerapp", ["users"]);
var ObjectId = mongojs.ObjectId;

var app = express();

// var logger = function(req, res, next) {
//   console.log("logging...");
//   next();
// };

// app.use(logger);

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Path
app.use(express.static(path.join(__dirname, "public")));

// Global vars
app.use(function(req, res, next) {
  res.locals.errors = null;
  next();
});

app.use(expressValidator());

var users = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    emain: "johndoe@gmail.com"
  },
  {
    id: 2,
    first_name: "Bob",
    last_name: "Smith",
    emain: "bobsmith@gmail.com"
  },
  {
    id: 3,
    first_name: "Jill",
    last_name: "Jackson",
    emain: "jjackson@gmail.com"
  }
];

app.get("/", function(req, res) {
  db.users.find(function(err, docs) {
    console.log(docs);
    res.render("index", {
      title: "Customers",
      users: docs
    });
  });
});

app.post("/users/add", function(req, res) {
  //console.log(req.body.first_name)

  req.checkBody("first_name", "First Name is Required").notEmpty();
  req.checkBody("last_name", "Last Name is Required").notEmpty();
  req.checkBody("email", "Email is Required").notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    console.log("ERRORS");
    res.render("index", {
      title: "Custormers",
      users: users,
      errors: errors
    });
  } else {
    var newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    };
    db.users.insert(newUser, function(error, result) {
      if (error) {
        console.log(err);
      }

      res.redirect("/");
    });
  }
});

app.delete("/users/delete/:id", function(req, res) {
  console.log(req.params.id);
  db.users.remove({ _id: ObjectId(req.params.id) });
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
