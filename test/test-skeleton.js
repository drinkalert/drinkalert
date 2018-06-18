beforeEach('clear and add', function(done) {

    models.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
      .then(function(){
        models.sequelize.options.maxConcurrentQueries = 1;
        return models.sequelize.sync({ force: true });
      })
      .then(function(){
        return models.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
      })
      .then(function() {
        let user = {
          email: 'drinker@drinkalert.com',
          password: bcrypt.hashSync("fakepassword123", bcrypt.genSaltSync(10)),
          name: 'Dave',
          weight: 90,
          sex: 'F',
           }
        return models.User
          .create(user);
      })
      .then(function(data) {
        return data.dataValues.id;
      })
      .then(function(UserId) {
        return models.Drink
          .bulkCreate([{
            drink_date: Date.now(),
            drink_frequency: 5.67,
            UserId
          }, {
            drink_date: Date.now(),
            drink_frequency: 6.66,
            UserId
          }, {
            drink_date: Date.now(),
            drink_frequency: 9.11,
            UserId
          }, 
        ])
      })
      .then(function(data) {
        return Promise.resolve(done());
      })
      .catch(function(error) {
        console.log(error);
        return Promise.reject(done());
      });
  });