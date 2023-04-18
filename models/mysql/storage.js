const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

//defines the model of table on mysql
const Storage = sequelize.define(
  "storages",
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = Storage;
