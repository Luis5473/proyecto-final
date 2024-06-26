const mongoose = require("mongoose");

const Album = new mongoose.Schema({
  titulo: { type: String, required: [true, "el titulo es requerido"] },
  descripcion: {
    type: String,
    required: [true, "la descripcion es requerida"],
    minlength: 5,
    maxlength: 200,
  },
  anoLanzamiento: {
    type: Number,
    required: [true, "la fecha de lanzamiento es requerida"],
    min: 1,
  },
});

module.exports = mongoose.model("Album", Album);