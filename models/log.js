module.exports = function (sequelize, DataTypes) {
    var Log = sequelize.define("Log", {
      // Giving the Log model a name of type STRING
      action: {
        type: DataTypes.STRING
      }
    });
    return Log;
  };