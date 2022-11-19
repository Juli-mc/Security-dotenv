const db = require("../utils/database");
const Users = require("../models/users.models");
const Tasks = require("../models/tasks.models");
const Categories = require("../models/categories.models");
const TasksCategories = require("../models/tasksCategories.models");
const Adresses = require("../models/adresses.models");
const initModels = require("../models/init.models");

initModels();

const users = [
  { username: "Ian Rosas", email: "ian@gmail.com", password: "1234" },
  { username: "Alvis Echeverria", email: "alvis@gmail.com", password: "1234" },
  { username: "Carlos Tineo", email: "carlos@gmail.com", password: "1234" },
];

const tasks = [
  {
    title: "Crear seeders",
    userId: 1,
  },
  {
    title: "Pasear al perro",
    userId: 2,
  },
  {
    title: "Tomar dos litros de agua",
    userId: 3,
  },
];

const addresses = [
  { street: "Buena Vista", number: 157, userId: 1 },
  { street: "benito Juarez", number: 57, userId: 2 },
  { street: "Madero", number: 157, userId: 3 },
];

const categories = [
  { name: "personal" }, // 1
  { name: "escuela" }, // 2
  { name: "salud" }, // 3
  { name: "trabajo" }, // 4
  { name: "hogar" }, // 5
  { name: "deporte" }, // 6
  { name: "ocio" }, // 7
  { name: "financiero" }, // 8
];

const tc = [
  { taskId: 1, categoryId: 2 },
  { taskId: 1, categoryId: 4 },
  { taskId: 1, categoryId: 5 },
  { taskId: 2, categoryId: 1 },
  { taskId: 2, categoryId: 5 },
  { taskId: 2, categoryId: 7 },
  { taskId: 3, categoryId: 1 },
  { taskId: 3, categoryId: 3 },
  { taskId: 3, categoryId: 5 },
];

db.sync({ force: true })
  .then(() => {
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      addresses.forEach((address) => Adresses.create(address));
    }, 100);
    setTimeout(() => {
      tasks.forEach((task) => Tasks.create(task));
    }, 200);
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 300);
    setTimeout(() => {
      tc.forEach((tc) => TasksCategories.create(tc));
    }, 400);
    console.log("plantación de info en seed exitosa");
  })
  .catch((error) => console.log(error));
