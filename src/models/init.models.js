const Users = require("./users.models");
const Tasks = require("./tasks.models");
const Categories = require("./categories.models");
const TasksCategories = require("./tasksCategories.models");
const Adresses = require("./adresses.models");

const initModels = () => {
  //crear las relaciones entre tablas
  //belongsTo y HasOne
  Adresses.belongsTo(Users, { as: "residents", foreignKey: "user_id" });
  Users.hasOne(Adresses, { as: "home", foreignKey: "user_id" });
  //relacion uno a muchos con metodos belongsTo y HasMany

  Tasks.belongsTo(Users, { as: "author", foreignKey: "user_id" });
  Users.hasMany(Tasks, { as: "todos", foreignKey: "user_id" });

  //relacion muchos a muchos
  // recuerda que esta relación se consigue haciendo
  // uno a muchos entre tareas y tabla pivote
  TasksCategories.belongsTo(Categories, {
    as: "category",
    foreignKey: "category_id",
  });
  Categories.hasMany(TasksCategories, {
    as: "todos",
    foreignKey: "category_id",
  });

  // uno a muchos entre categorias y tabla pivote
  TasksCategories.belongsTo(Tasks, { as: "todos", foreignKey: "task_id" });
  Tasks.hasMany(TasksCategories, { as: "categories", foreignKey: "task_id" });
};

module.exports = initModels;
