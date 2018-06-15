module.exports = function(sequelize, DataTypes) {
    var Alcohol = sequelize.define("Alcohol", {
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

    });

    Alcohol.associate = function(models) {

        Alcohol.belongsTo(models.Alcohol_type, {
          foreignKey: {
            allowNull: false
          }
        });
    }
    return Alcohol
}