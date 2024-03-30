const buttonAdd = document.querySelector(".add-button");

// Generamos una funcion para guardar los valores que ingresa el usuario

  // Obtener los input del form
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const imageInput = document.getElementById("image");
  const anoLanzamientoInput = document.getElementById("anoLanzamiento");

  // Obtener los valores de los campos de entrada
  const titleValue = titleInput.value;
  const descriptionValue = descriptionInput.value;
  const imageValue = imageInput.value;
  const anoLanzamientoValue = anoLanzamientoInput.value;

//   // Devolver los valores en un objeto
//   return {
//     titulo: titleValue,
//     descripcion: descriptionValue,
//     portada: imageValue,
//     anoLanzamiento: anoLanzamientoValue,
//   };
// }

// const addAlbum = async (e) => {
//   e.preventDefault();
//   const objectToSend = getInputValues();
//   try {
//     let album = await axios.post(
//       `${window.location.host}/album/agregar`,
//       objectToSend
//     );
//     await swal({
//       title: "Album agregado correctamente!",
//       text: `Album: ${album.data.titulo}`,
//       icon: "success",
//       button: "Continuar",
//     });
//   } catch (error) {
//     swal("No se puedo agregar al album, intentelo nuevamente");
//   }
// };

// buttonAdd.addEventListener("click", (e) => {
//   addAlbum(e);
//   window.location.href = "../Album/Album.html";
// });
document.addEventListener("DOMContentLoaded", function () {
  const albumForm = document.getElementById("albumForm");
  const buttonAdd = document.querySelector(".add-button");

  // Función para obtener los valores del formulario
  function getInputValues() {
      const titleInput = document.getElementById("title");
      const descriptionInput = document.getElementById("description");
      const imageInput = document.getElementById("image");
      const anoLanzamientoInput = document.getElementById("anoLanzamiento");

      return {
          titulo: titleInput.value,
          descripcion: descriptionInput.value,
          portada: imageInput.value,
          anoLanzamiento: anoLanzamientoInput.value,
      };
  }

  // Función para agregar un álbum
  async function addAlbum(e) {
      e.preventDefault();
      const objectToSend = getInputValues();
      try {
          const response = await axios.post(
              `http://${window.location.host}/album/agregar`,
              objectToSend
          );
          await swal({
              title: "Album agregado correctamente!",
              text: `Album: ${response.data.titulo}`,
              icon: "success",
              button: "Continuar",
          });
          // Redireccionar después de agregar el álbum
          window.location.href = "../Album/Album.html";
      } catch (error) {
          swal("No se pudo agregar el álbum, intentelo nuevamente");
      }
  }

  // Evento de envío del formulario
  albumForm.addEventListener("submit", addAlbum);
});