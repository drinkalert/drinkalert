const path = require("path");
const drinkController = require('../controllers/drinkcontroller')
// Requiring our Todo model
const db = require("../models");


module.exports = function(app, passport) {
 
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      })

    app.get('/signup', drinkController.signup)

    app.get('/signin', drinkController.signin)


    app.post('/signin', function(req, res, next) {
      passport.authenticate('local-signin', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/signup'); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          console.log(`user.name in app.post/signin is ${user.name}`)
          return res.redirect('/dashboard/' + user.id);
        });
      })(req, res, next);
    })

    app.post('/signup', function(req, res, next) {
      passport.authenticate('local-signup', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/signup'); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.redirect('/dashboard/' + user.id);
        });
      })(req, res, next);
    })

    // app.post('/signup', 
    // passport.authenticate('local-signup', {
    //     successRedirect: '/dashboard',
    //     failureRedirect: '/signup'
    // })
    // )

    
    
    //app.get('/dashboard',drinkController.dashboard); 
    //modified to check if isLoggedIn
  

    // app.get('/dashboard',
    // isLoggedIn, drinkController.dashboard);

    app.get("/dashboard/:id",isLoggedIn, function(req, res) {
        console.log(`req.params.id before it goes into findone ${req.params.id}`)
        db.user.findOne({
          where:{id : req.params.id}
        })
        // db.user.findAll()
          .then(function(dbUser) {
            console.log(`req.params.id is ${req.params.id}`)
            console.log(`Found user: ${dbUser}`)
            // console.log(`user weight: ${dbUser.weight}`)
            //res.json(dbUser);
            res.render("partials/dashboard",{dbUser})
          })
      })
   

      // app.get("/dashboard:id",isLoggedIn, function(req, res) {
      //   Promise.all([
      //     db.user.findOne({id: req.params.id}),
      //     db.alcohol.findAll()
      //   ])
      //     .then(function(dbUser, dbDrinks) {
      //       console.log(`Found user: ${dbUser.name}`)
      //       console.log(`user weight: ${dbUser.weight}`)
      //       //res.json(dbUser);
      //       res.render("partials/dashboard",{dbUser},{dbDrinks})
      //     })
      //     // .catch(err => {
      //     //   return err
      //     // })
      // })




    app.get('/logout',drinkController.logout);

//     app.post('/signin', 
//         passport.authenticate('local-signin', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/signin'
//     })
// )





// app.post('/signin', 
// passport.authenticate('local-signin', 
// function(req, res){

//     console.log(req.user.id)
//     res.redirect('/dashboard/?id='+user.id)
// }
// ))

}

//middleware to protect route
function isLoggedIn(req, res, next) {
    
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
}