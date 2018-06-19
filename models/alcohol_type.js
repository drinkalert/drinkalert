//Note all table objects are lowercase.

module.exports = function(sequelize, DataTypes) {
    var alcoholType = sequelize.define("alcohol_type", {
        drink_type: {
            type: DataTypes.STRING,

            allowNull: false,
        },

    },
    {
        underscored: true,
    })

    alcoholType.associate = function(models) {

        alcoholType.hasMany(models.alcohol, {
          onDelete: "cascade"
        })
      }
    return alcoholType
}

// User.hasMany(Post, {foreignKey: 'user_id'})
// Post.belongsTo(User, {foreignKey: 'user_id'})