module.exports = function (seqelize, DataTypes) {
    var User = seqelize.define("User", {
        name: {
            type: DataTyoes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: 1,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        drunkness: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    });

    Post.associate = function(models) {
        // We're saying that Drink should belong to a User
        // A Drink can't be created without an User due to the foreign key constraint
        Post.belongsTo(models.Drink, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return User
}