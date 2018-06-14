module.exports = function(sequelize, DataTypes) {
    var Alcohol = sequelize.define("Alcohol", {
        name: {
            type: DataTypes.STRING,

            allowNull: false,
        },

        alcohol_content: {
            type: DataTypes.INTEGER,
        },

        ounces: {
            type: DataTypes.INTEGER,
        },

        alcohol_type_id: {
            type: DataType.INTEGER,
        }

    });

    Alcohol.associate = function(models) {

        Alcohol.belongsTo(models.alcohol_type, {
          foreignKey: {
            allowNull: false
          }
        });
    }
    return Alcohol
}