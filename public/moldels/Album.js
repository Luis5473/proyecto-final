import { Schema, model } from "mongoose";

const Album = new Schema({
  titulo: { type: String, required: [true, "el titulo es requerido"] },
  descripcion: {
    type: String,
    required: [true, "la descripcion es requerida"],
    min: 5,
    max: 200,
  },
  anoLanzamiento: {
    type: Number,
    required: [true, "la fecha de lanzamiento es requerida"],
    min: 1,
  },
  canciones: [
    {
      titulo: { type: String },
      duracion: { type: String },
      link: { type: String },
    },
  ],
  portada: { type: String },
});

export default model("Album", Album);
