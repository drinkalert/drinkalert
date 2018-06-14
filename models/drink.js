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
//========================================== 
// Here is where we input data for testing. Data will be generated automatically.    
    Drink.sync();

    Drink.create({
      drink_date: null,
      drink_frequency: 0,
      drink_start_time: null,

    });
//==========================================

    Drink.associate = function(models) {

        Drink.hasMany(models.User, {
        //   onDelete: "cascade"
        });
      };

    return Drink
}