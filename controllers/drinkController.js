// var express = require("express");

// var router = express.Router();


// // Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");


module.exports = {
    renderDrink: function(req, res) {
      res.render("partials/drinks", {
        msg: "This is the data being passed from drinkController.js!"
      });
    }
  };
  