// const db = require('./db');
module.exports = (sequelize, DataTypes) => {

  const Message = sequelize.define('Message', {
    authorId: {
      allowNull: false,
      type: DataTypes.INTEGER, 
    },
    content: {
      allowNull:false, 
      type: DataTypes.TEXT, 
    },
    id: {
      primaryKey: true,
      type:DataTypes.NUMBER,
      
    },
    createdAt:{
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    }
  },
  {
    tableName: 'message'
  },
  {
    timestamps:false,
    createdAt: false,
    updatedAt: false,
    id: false
  }
  );
  return Message;
};