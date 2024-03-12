const query = window.location.search.split("=");
const idAlbum = query[1];
let album;
import axios from 'axios';

const agregarSong = document.querySelector("#agregar");

const redirect = (id) => {
  window.location.href = `../Album/Album.html?album=${id}`;
};

// Obtener los valores del formulario
function getInputValues() {
  // Obtener los input del form
  const titleInput = document.getElementById("title");
  const duracionInput = document.getElementById("duration");
  const linkInput = document.getElementById("link");

  // Obtener los valores de los campos de entrada
  const titleValue = titleInput.value;
  const duracionValue = duracionInput.value;
  const linkValue = linkInput.value;

  // Devolver los valores en un objeto
  return {
    titulo: titleValue,
    duracion: duracionValue,
    link: linkValue,
  };
}

// Obtener información del álbum
const getAlbum = async () => {
  try {
    const response = await axios.get(
      `http://${window.location.host}/album/${idAlbum}`
    );
    album = response.data;
  } catch (error) {
    console.error(error);
  }
};

// Ejecutar la función para obtener información del álbum
getAlbum();

// Agregar canción al álbum
const addSong = async (e) => {
  e.preventDefault();
  const objectToSend = getInputValues();
  try {
    // Utilizar axios.put para realizar la solicitud PUT
    await axios.put(`${window.location.host}/AddSong/${idAlbum}`, objectToSend);
    await swal("Canción agregada correctamente");
  } catch (error) {
    console.error(error);
    swal("Error al agregar la canción");
  }
};

// Escuchar el evento de clic en el botón de agregar
agregarSong.addEventListener("click", (e) => {
  addSong(e);
});

