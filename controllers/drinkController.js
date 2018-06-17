// var express = require("express");

// var router = express.Router();

var db = require("../models");
// // Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");


module.exports = {
    renderDrink: function(req, res) {
      console.log('req.params')
      console.log(req.params)
      db.User.findById(req.params.id)
      .then(function(user){
        res.render('partials/drinks', {User: user})
      })

//      res.render("partials/drinks", {
  //      msg: "This is the data being passed from drinkController.js!"
    //  });
    },
    renderMain: function(req, res) {
        res.render('partials/main', {
          msg: "main"
        })
    },
    newDrinker: function(req, res){
      res.render("partials/register", {
        msg: "registration time from drinkController.js"
      })
      console.log('registration time from drinkController')
    },

    loginDrinker: function(req, res){
      res.render("partials/login", {
        msg: "login"
      })
      console.log('login happens')
    },
  };
  