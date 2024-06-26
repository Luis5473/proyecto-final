const mongoose = require("mongoose");
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const User = new mongoose.Schema({
  nombre: { type: String, require:true, minlength: 2 },
  apellido: { type: String, require:true, minlength: 2 },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return regex.test(v);
      },
      message: " You must enter a valid email!",
    },  
  password: { type: String },
  favoritos: { type: String },
},
});

module.exports = mongoose.model("User", User);