module.exports = function(sequelize, DataTypes) {
    var Alcohol_type = sequelize.define("Alcohol_type", {
        drink_type: {
            type: DataTypes.STRING,

            allowNull: false,
        },

    });

    Alcohol_type.associate = function(models) {

        Alcohol_type.hasMany(models.Alcohol, {
          onDelete: "cascade"
        });
      };
    return Alcohol_type
}

// User.hasMany(Post, {foreignKey: 'user_id'})
// Post.belongsTo(User, {foreignKey: 'user_id'})