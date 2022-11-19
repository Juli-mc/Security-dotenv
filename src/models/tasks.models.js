const db = require("../utils/database");
const { DataTypes, INTEGER, Model } = require("sequelize");
const Users = require("./users.models");

const Tasks = db.define("tasks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "is_complete",
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

module.exports = Tasks;
