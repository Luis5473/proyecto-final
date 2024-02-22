import { Schema, model } from "mongoose";

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const User = new Schema({
  nombre: { type: String, require: true, min: 2 },
  apellido: { type: String, require: true, min: 2 },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return regex.test(v);
      },
      message: " You must enter a valid email!",
    },
  },
  password: { type: String },
  favoritos: { type: String },
});

export default model("User", User);
