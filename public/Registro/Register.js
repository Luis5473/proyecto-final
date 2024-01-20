const $submit = document.getElementById("submit"),
$password = document.getElementById("password"),
$username = document.getElementById("nombres"),
$email = document.getElementById("email");

document.addEventListener("click", (e) => {
  if (e.target ===$submit) {
    if ($password.value !== "" && $username.value !=="") {
      e.preventDefault();
      window.location.href = "../InicioDeSesion/login.html";
alert
    }
  }
});