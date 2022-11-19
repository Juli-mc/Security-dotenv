const db = require("../utils/database");
const { DataTypes, INTEGER, Model } = require("sequelize");
const Categories = require("./categories.models");

const TasksCategories = db.define("tasksCategories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  taskId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "task_id",
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categories,
      key: "id",
    },
    field: "category_id",
  },
});

module.exports = TasksCategories;
