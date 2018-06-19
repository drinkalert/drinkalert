// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
//const router = express.Router({ mergeParams: true });
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const passport = require('passport')
const session = require('express-session')
const env = require('dotenv').load()

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");


// Method override for RESTFul form submissions
app.use(methodOverride("_method"));

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




// Routes
// =============================================================
require("./routes/html-routes.js")(app, passport);
require("./routes/api-routes.js")(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, db.user);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false })
.then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
