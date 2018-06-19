//Note all table objects are lowercase.

module.exports = function(sequelize, DataTypes) {
    var Alcohol = sequelize.define("alcohol", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        alcohol_content: {
            type: DataTypes.FLOAT,
        },

        ounces: {
            type: DataTypes.FLOAT,
        },

        // alcohol_type_id: {
        //     type: DataTypes.INTEGER,
        // }

    },
{underscored: true,
});

    Alcohol.associate = function(models) {

        Alcohol.belongsTo(models.alcohol_type, {
          foreignKey: {
            allowNull: false
          }
        })
        Alcohol.hasMany(models.drink,{
            onDelete: 'cascade'
        })
    }
    return Alcohol
}