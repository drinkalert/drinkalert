module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    User.sync();

    User.create({
      name: "Jose",
      email: "jose@test.com",
      password: null,
      weight: 160,
      sex: "Male"

    });

    User.associate = function(models) {

        User.belongsTo(models.Drink, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return User
}