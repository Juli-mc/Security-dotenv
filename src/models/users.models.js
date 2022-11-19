const db = require("../utils/database");
const { DataTypes, INTEGER, Model } = require("sequelize");

//define dos parametros
//string con el nombre de la tabla y un objeto con las propiedades o atributos de cada columna de la tabla

const Users = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
