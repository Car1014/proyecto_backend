const formElement = document.getElementById("transaction");



formElement.addEventListener("submit",(event)=> {
    event.preventDefault();

    console.log("enviado");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    // Construir la URL con los datos como parámetros de consulta
    const url = `http://localhost:3000/transaction?email=${email}&password=${password}`;

    // Se manda la transacción al backend usando GET y parámetros en la URL
    fetch(url, {
        method: 'get'
    })
    .then(response => response.json())  
    .then(data => {
        console.log('Respuesta del servidor:', data);
        console.log(email);
        window.location.href="sesion-init.html";

        // Aquí puedes manejar la respuesta del servidor
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
});

let email = document.getElementById("email").value;
var miVariable = email;

// Accede al elemento en tu HTML usando su ID y asigna el contenido de la variable
document.getElementById("miElemento").innerHTML = miVariable;

    

