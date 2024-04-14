const onLoad = async () => {
  try {
    const response = await axios.get("../../../../me");
    username.textContent = `${response.data.nombre} ${response.data.apellido}`;
  } catch (error) {
    window.location.href = "../InicioDeSesion/login.html"; 
  }
};

const logOut = async () => {
  try {
    const response = await axios.post("../../logout");
    window.location.href = "../InicioDeSesion/login.html";
  } catch (error) {
    console.error(error);
  }
};

export { onLoad, logOut };