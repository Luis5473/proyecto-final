
const $singIn = document.getElementById("singIn"),
      $password = document.getElementById("password"),
      $name = document.getElementById("name"),
      $email = document.getElementById("email");
      

      Document.addEventListener("click", (e) => {
        if (e.target ===$singIn) {
          if ($password.value !== "" && $name.value !=="") {
            e.preventDefault();
            window.location.href = "./login.html";
            
          } 
        }
      });
     
//  signIn.onclick = function () {
//    nameInput.style.maxHeight = "0";
//    title.innerHTML = "Login";
//    signUp.classList.add("disable")
//    signIn.classList.remove("disable")
//  }

//  signUp.onclick = function () {
//    nameInput.style.maxHeight = "0";
//    title.innerHTML = "Login";
//    signUp.classList.add("disable")
//    signIn.classList.remove("disable")
//  }




//       document.addEventListener("click",(e)=>{
//         if (e.target === $submit) {
//          if ($password.value !== "" && $username.value !== "") {
//           e.preventDefault();
//           window.location.href = "./index.html";
//          } 
//         }
//       })


