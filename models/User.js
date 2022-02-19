const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {}


User.init(
  {
    id: {
       
        type: DataTypes.INTEGER,
        
        allowNull: false,
        
        primaryKey: true,
        
        autoIncrement: true
      },
      
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        //make sure email is unique and has no duplicates
        unique: true,
        
        validate: {
          isEmail: true
        }
      },
      
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          
          len: [8]
        }
      }
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;