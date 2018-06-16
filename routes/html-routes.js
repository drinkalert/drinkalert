// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var drinkController = require("../controllers/drinkController")

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html splash page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/slider", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/slider.html"))
  });

  app.get("/drink/:id", drinkController.renderDrink);

  app.get("/register", drinkController.newDrinker);

  app.get("/login", drinkController.loginDrinker);

  // user route loads user.html
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

};
