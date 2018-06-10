module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
        },
        
        email: {
            type: DataTypes.STRING,
        },

        password: {
            type: DataTypes.STRING,
        },

        weight: {
            type: DataTypes.STRING,
        },

        age: {
            type: DataTypes.STRING,
        },

    });
    return User
}