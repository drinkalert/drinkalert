// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const drinkController = require("../controllers/drinkController")


// Routes
// =============================================================
module.exports = function(app, passport) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html splash page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/slider", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/slider.html"))
  });

  app.get("/drink/:id", drinkController.renderDrink);

  app.get("/main", drinkController.renderMain);

  app.get("/login", drinkController.loginDrinker);

  // user route loads user.html
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/register", drinkController.newDrinker)

  app.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/main',
    failureRedirect: '/register'
}

));

};
