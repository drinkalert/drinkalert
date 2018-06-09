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
    return User
}