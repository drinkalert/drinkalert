module.exports = function(sequelize, DataTypes) {
    var alcohol_type = sequelize.define("alcohol_type", {
        drink_type: {
            type: DataTypes.STRING,

            allowNull: false,
        },

    });

    alcohol_type.associate = function(models) {

        alcohol_type.hasMany(models.Alcohol.alcohol_type_id, {
          onDelete: "cascade"
        });
      };
    return alcohol_type
}

User.hasMany(Post, {foreignKey: 'user_id'})
Post.belongsTo(User, {foreignKey: 'user_id'})