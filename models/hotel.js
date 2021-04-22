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
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name is Required",
          },
        },
      },
      rating: DataTypes.INTEGER,
      location: DataTypes.STRING,
      image: DataTypes.STRING,
      price: {
        type: DataTypes.INTEGER,
        validate: {
          customValidator(value) {
            if (value < 1) {
              throw new Error("Price is Required");
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Hotel",
    }
  );

  Hotel.addHook("beforeCreate", (instance, options) => {
    if (instance.location === "") {
      instance.location = "-";
    }

    if (instance.image === "") {
      instance.image =
        "https://blackmantkd.com/wp-content/uploads/2017/04/default-image.jpg";
    }
  });

  return Hotel;
};
