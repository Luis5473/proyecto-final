const onLoad = async () => {
  try {
    const response = await axios.get("../../../../me");
    username.textContent = `${response.data.nombre} ${response.data.apellido}`;
  } catch (error) {
    console.error("Error al cargar los datos del usuario:", error.message);
    // Aquí puedes mostrar un mensaje de error en la interfaz de usuario si lo deseas
    // ejemplo: mostrar un div con el mensaje "No se pudo cargar los datos del usuario"
  }
};

const logOut = async () => {
  try {
    const response = await axios.post("../../logout");
    
  } catch (error) {
    console.log(error.message);
  }
};

export { onLoad, logOut };