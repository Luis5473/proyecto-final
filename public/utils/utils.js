const onLoad = async () => {
  try {
    const response = await axios.get("../../../../me");
    username.textContent = `${response.data.nombre} ${response.data.apellido}`;
  } catch (error) {
    console.error("Error al cargar los datos del usuario:", error.message);   
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