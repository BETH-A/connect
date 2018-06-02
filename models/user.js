module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING 
      user_name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postal_code: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      field_study: {
        type: DataTypes.STRING,
        allowNull: false
      },
    pic: {
        type: DataTypes.STRING,
        allowNull: true
      },
    });
  
    User.associate = function(models) {
      User.hasOne(models.Survey);
    };
    return User;
  };