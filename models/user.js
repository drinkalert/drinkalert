//Note all table objects are lowercase. db.user, not db.User!

var DataTypes = require('sequelize/lib/data-types')

module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('user', {
 
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
            type: DataTypes.ENUM,
            values: ['m','f','yes','other'],
            allowNull: false,
            defaultValue: 'yes',
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
 
 
    },
    {
        underscored: true,
    }

)
    User.associate = function(models) {

        User.hasMany(models.drink, {
            onDelete: "cascade"
        })
      }


    return User;
 
}