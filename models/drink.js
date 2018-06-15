module.exports = function(sequelize, DataTypes) {
    var Drink = sequelize.define("Drink", {
        drink_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        drink_frequency: {
            type: DataTypes.FLOAT,
        },

        drink_start_time: {
            type: DataTypes.DATE,
        }

    })
//========================================== 
// Here is where we input data for testing. Data will be generated automatically.    
    //Drink.sync();

    // Drink.create({
    //   drink_date: Date(),
    //   drink_frequency: 0,
    //   drink_start_time: Date(),

    // });
//==========================================
console.log("hold my beer drink.js line 28")
    Drink.associate = function(models) {

        Drink.belongsTo(models.User, {
            foriegnKey: {
                allowNull: false
            }
        //   onDelete: "cascade"
        })
      }

    return Drink
}