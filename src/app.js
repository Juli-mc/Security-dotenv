const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.models");
const Users = require("./models/users.models");
const { json } = require("sequelize");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("Sync exitosa"))
  .catch((error) => console.log(error));

console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server" });
});

app.get("/api/v1/users", async (req, res) => {
  try {
    const result = await Users.findAll({
      attributes: ["id", "username", "email"],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//para traer propiedades exclusivas usamos el metodo => atrributes: ["id, "username"]
//para excluir propiedades y traer el resto usamos el método exclude dentro del attribute  => exclude: ["password"]

// app.get("/api/v1/users/:email", async (req, res) => {
//   try {
//     const { email } = req.params;
//     const result = await Users.findOne({
//       where: { email },
//       attributes: ["id", "username", "email"],
//     });
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

app.get("/api/v1/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//para crear usamos el método post

app.post("/api/v1/users", async (req, res) => {
  try {
    const newTask = req.body;
    //ahora el create
    const result = await Users.create(newTask);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

//acutalizar la información de una tabla
app.put("/api/v1/users/:id", async (req, res) => {
  try {
    //obtener el id del req.params
    const { id } = req.params;
    const data = req.body;
    const result = await Users.update(data, {
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//borrar información por id
app.delete("/api/v1/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
