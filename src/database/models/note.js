const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {}
  Note.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      uid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Note',
    },
  );
  return Note;
};
