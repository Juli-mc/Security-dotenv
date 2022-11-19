const db = require("../utils/database");
const { DataTypes, INTEGER, Model } = require("sequelize");
const Users = require("./users.models");

const Adresses = db.define("adresses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
    field: "user_id",
  },
});

module.exports = Adresses;
