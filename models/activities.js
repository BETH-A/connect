module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
      // Giving the Activity model a name of type STRING  
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  
    // Activity.associate = function (models) {
    //   // Associating Activity with User
    //   Activity.belongsTo(models.User);
    // };
  
    return Activity;
  };