// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/users", function(req, res) {
    db.User.findAll({})
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // POST route for saving a new post
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      gender: req.body.gender,
      weight: req.body.weight,
    })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // PUT route for updating posts
  app.put("/api/users/:id", function(req, res) {
    db.User.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });
};
