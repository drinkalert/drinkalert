module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
{
    underscored: true,
})
//========================================== 
// Here is where we input data for testing. Data will be generated automatically.
    // User.sync();

    User.create({
      name: "Jose",
      email: "jose@test.com",
      password: "xxx",
      weight: 160,
      sex: "Male"

    });
//==========================================

    User.associate = function(models) {

        User.hasMany(models.Drink, {
            onDelete: "cascade"
        })
      }

    return User
}
