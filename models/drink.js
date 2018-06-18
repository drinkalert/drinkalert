//Note all table objects are lowercase.

module.exports = function(sequelize, DataTypes) {
    var Drink = sequelize.define("drink", {
        drink_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        drink_frequency: {
            type: DataTypes.ENUM,
            values:['Cheap Date','Buzz Light', 'YOLO', 'Dave']
        },

        drink_start_time: {
            type: DataTypes.DATE,
        }

    },
    {
        underscored: true,
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
console.log("hold my beer drink.js")
    Drink.associate = function(models) {

        Drink.belongsTo(models.user, {
            foriegnKey: {
                allowNull: false
            }
        //   onDelete: "cascade"
         })
        Drink.belongsTo(models.alcohol, {
            onDelete: 'cascade'
        })

      }

    return Drink
}