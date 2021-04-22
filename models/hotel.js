"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    static associate(models) {
      // define association here
    }
  }
  Hotel.init(
    {
      name: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      location: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Hotel",
    }
  );
  return Hotel;
};
