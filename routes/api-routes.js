// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

const url = require('url')
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


  app.get("/api/users:id", function(req, res) {

    db.User.findOne({
      where: {
        id: req.params.id

      }
      
    })
      .then(function(dbUser) {
        console.log(`Found user: ${dbUser.name}`)
        res.json(dbUser);
        res.render("drink",dbUser)
      });
  });


  // get route for user selected drink
  app.get("/api/alcohol/:name", function(req, res) {
    db.Alcohol.findOne({
      name: req.params.name
    })
    .then(function(dbAlcohol) {
      console.log(`Found alcohol: ${ dbAlcohol.name }`)
      res.json(dbAlcohol)
    })
  })

 app.get("/api/dashboard/:name", function(req, res) {
   db.user.findOne({
      where: {
        name: req.params.name
      },
    }).then(function(dbUsers) {
      console.log(`Found person: ${dbUsers.name}`)
      res.json(dbUsers)
    })
  })


  // POST route for new registration
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    console.log('api-routes post newUser')
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      weight: req.body.weight,
      age: req.body.age,
      sex: req.body.sex,
    })
      .then(function(dbUser) {
        console.log(`New User ${dbUser.name}, with id ${dbUser.id} has been created.`)
        res.send(dbUser)
        /*
        
        res.redirect(url.format({
          pathname:"/drink/" + dbUser.id
        }));
        */
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
