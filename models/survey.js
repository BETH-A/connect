module.exports = function (sequelize, DataTypes) {
    var Survey = sequelize.define("Survey", {
      // Giving the Survey model a name of type STRING
  
      a1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      a2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      a3: {
        type: DataTypes.STRING,
        allowNull: false
      },
      a4: {
        type: DataTypes.STRING,
        allowNull: false
      },
      a5: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
  
    Survey.associate = function (models) {
      // Associating Survey with User
      Survey.belongsTo(models.User);
    };
    return Survey;
  };