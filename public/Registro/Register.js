const $username = document.getElementById("nombre"),
$submit = document.getElementById("submit"),
$password = document.getElementById("password"),
$email = document.getElementById("email");

document.addEventListener("click", (e) => {
  if (e.target ===$submit) {
    if ($password.value !== "" && $username.value !=="") {
      e.preventDefault();
      window.location.href = "../InicioDeSecion/login.html";
      alert("Formulario enviado correctamente");
    }
  }
});