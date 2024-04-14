const express = require("express");
const router = express.Router();
const axios = require('axios');
// Modelos
const User = require("../public/models/User");
const Album = require("../public/models/Album");

// Librerías de autenticación y encriptación
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Ruta para iniciar sesión
router.post("/logIn", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Correo electrónico o contraseña incorrectos" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Correo electrónico o contraseña incorrectos" });
    }

    const payload = {
      email: user.email,
      nombre: user.nombre,
      apellido: user.apellido,
    };
    
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
    res.status(200).json({ token, user: payload });
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

// Ruta para crear un usuario
router.post("/createuser", async (req, res) => {
  const { password, email, nombre, apellido } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      password: hashedPassword,
      email,
      nombre,
      apellido,
    });
    res.status(201).json({ message: "Usuario creado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario" });
  }
});

// Ruta para obtener la información de un usuario
router.get("/usuario/:id", async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id);
    res.status(200).json({
      usuario: {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
});

// Ruta para editar los datos de un usuario
router.put("/usuario/edit/:id", async (req, res) => {
  try {
    const usuario = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: "Error al editar el usuario" });
  }
});

// Ruta para agregar un álbum
router.post("/album/agregar", async (req, res) => {
  try {
    const nuevoAlbum = await Album.create(req.body);
    res.status(201).json(nuevoAlbum);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar un álbum" });
  }
});

// Ruta para editar un álbum
router.put("/album/:id", async (req, res) => {
  try {
    const albumActualizado = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(albumActualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al editar el álbum" });
  }
});

// Ruta para agregar una canción a un álbum
router.put("/song/:idAlbum", async (req, res) => {
  try {
    const album = await Album.findById(req.params.idAlbum);
    album.canciones.push(req.body);
    await album.save();
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar una canción al álbum" });
  }
});

// Ruta para eliminar una canción de un álbum
router.put("/addSong/delete/:idAlbum", async (req, res) => {
  try {
    const { idSong } = req.query;
    const album = await Album.findById(req.params.idAlbum);
    album.canciones = album.canciones.filter(cancion => cancion._id !== idSong);
    await album.save();
    res.status(200).json({ message: "Canción eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la canción del álbum" });
  }
});

// Ruta para obtener todos los álbumes
router.get("/album/todos", async (req, res) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener todos los álbumes" });
  }
});

// Ruta para obtener la información de un álbum específico
router.get("/album/:id", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el álbum" });
  }
});

// Ruta para eliminar un álbum
router.delete("/album/:idAlbum", async (req, res) => {
  try {
    await Album.findByIdAndDelete(req.params.idAlbum);
    res.status(200).json({ message: "Álbum eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el álbum" });
  }
});

module.exports = router;
