const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const dotenv = require("dotenv");
dotenv.config();


const PORT = process.env.PORT;
const password = process.env.PASSWORD_MONGO;
const dbUser = process.env.User_MONGO;


console.log(process.env);

const url =
"mongodb+srv://Luis:Leycer.9206@atlascluster.32s5udh.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(cookieParser());

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  }),
);

app.use("/", routes);

const connectToMongo = async () => {
  try {
    await mongoose.connect(url);
    app.listen(3000, () => {
      console.log(
        "Servidor escuchando en el puerto 3000 y la base de datos conectada");
    });
  } catch (error) {
    console.log(error);
  }
};


connectToMongo();