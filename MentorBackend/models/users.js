'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {

    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING, 
    email: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currentJob: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING, 
        allowNull: true
    },
    isMentor: {
        type:DataTypes.BOOLEAN,
        defaultValue: false
    },
    isMentee: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {});
  users.associate = function(models) {
    users.hasMany(models.mentor, 
    { foreignKey: 'userId', onDelete: 'cascade'})
    // associations can be defined here
  };
  return users;
};