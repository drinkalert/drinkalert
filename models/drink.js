module.exports = function(sequelize, DataTypes) {
    var Drink = sequelize.define("Drink", {
        drink_date: {
            type: DataTypes.STRING,

            allowNull: false,
        },

        drink_frequency: {
            type: DataTypes.STRING,
        },

        drink_start_time: {
            type: DataTypes.DATE,
        }

    });

    Drink.associate = function(models) {

        Drink.hasMany(models.User, {
        //   onDelete: "cascade"
        });
      };

    return Drink
}