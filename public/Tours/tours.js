console.log("Ventas");


let nameUsuario = prompt ("¿Cual es tu nombre").toUpperCase();
 let edadUsuario = Number(prompt ("¿Cual es tu edad?"));
    alert(`Hola ${nameUsuario} de ${edadUsuario} 
    Te interesaria adquirir Tickets? `);    

    let span = document.querySelector("#Welcome")

while (nameUsuario.length < 3) {
    nameUsuario = prompt ("Tu nombre debe de tener al menos 3 caracteres")
 }

span.textContent = `Hola bienvenido ${nameUsuario}`


//clase 9


function getTickets(ticket, ciudad) {    
    
    if (ticket) {

        swal(`Buen trabajo`,`Felicitaciones compraste los tikets para el concierto en la ciudad de ${ciudad}`);
       
    } else {
        swal(`Lo lamento ya no hay tickes para la ciudad de ${ciudad}`);
    }      
    
    }
    
let botones = document.querySelectorAll("button")
//clase 10
// Accion si el usuario es menor
if (edadUsuario < 18) {
    swal ( "¡Lo sentimos eres menor de edad! " , " vuelva en algunos años mas " );
   
    for (let i = 0; i < botones.length; i++) {
        console.log(botones[i] ) ;
        botones[i].setAttribute("disabled", "disabled") 
        botones[i].style.backgroundColor = "gray"
        botones[i].style.cursor = "deafult"
     }
}
//clase 7
// if (nameUsuario.length < 3) {
//      alert("El nombre debe tener al menos 3 caracteres")
//     nameUsuario = prompt("Por favor ingresa tu nombre correctamente")
//  }

 

//clase 8
// let nameUsuario = prompt ("Cual es tu nombre")



// span.textContent = `Hola bienvenido ${nameUsuario}`

//clase 9
 
 
   
// const getTikets = (ticket, ciudad) => {
//         if (ticket) {
//             swal("Good job!", "You clicked the button!", "success");
           
//         } else {
        //     swal(`Lo lamento ya no hay tickes para la ciudad de ${ciudad}`);
        // }
        // }

// //clase 10



