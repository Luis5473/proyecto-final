const buttonAdd =document.querySelector(".add-button")


// Generamos una funcion para guardar los valores que ingresa el usuario
 function getInputValues() {
   // Obtener los input del form
  const titleInput = document.getElementById("title");
   const descriptionInput = document.getElementById("description");
  const imageInput = document.getElementById("image");
   const anoLanzamientoInput = document.getElementById("anoLanzamiento")

  // Obtener los valores de los campos de entrada
  const titleValue = titleInput.value;
  const descriptionValue = descriptionInput.value;
  const imageValue = imageInput.value;
   const anoLanzamientoValue = anoLanzamientoInput.value;

   // Devolver los valores en un objeto
  return {
     titulo: titleValue,
    descripcion: descriptionValue,
     portada: imageValue,
    anoLanzamiento: anoLanzamientoValue
  };
 }

 const addAlbum = async (e) => {
   e.preventDefault()
     const objectToSend = getInputValue();
  try {
    let album = await axios.post(`http://localhost:3000/album/agregar`, objectToSend);
    await swal({
      title: "Album agregado correctamente!",
      text: `Album: ${album.data.titulo}`,
      icon: "success",
       button: "Continuar",
    });
   } catch (error) {
   swal("No se puedo agregar al album, intentelo nuevamente");
   }
 };

 buttonAdd.addEventListener("click", (e) => {
    addAlbum(e)
    window.location.href = "../Album/Album.html";
  })