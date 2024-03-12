const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const user = require("./public/moldels/User");
const Album = require("./public/moldels/Album");



const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const password = process.env.PASSWORD_MONGO;
const dbUser = process.env.USER_MONGO;

const url = `mongodb+srv://${dbUser}:${password}@cluster0.p56p1dd.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);


routes.use(
  express.static("public", {
    setHeader: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

const connectMongo = async () => {
  try {    
    await mongoose.connect(url);
    app.listen(PORT, () => {
      console.log(
      `Servidor escuchando en el puerto ${PORT} y la base de datos conectada`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

connectMongo();
