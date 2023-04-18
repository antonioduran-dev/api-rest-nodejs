const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

//defines the model of table on mysql
const User = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.NUMBER,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM(["user", "admin"]),
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

//Export model
module.exports = User;
