const formElement = document.getElementById("savetransaction");

formElement.addEventListener("submit",(event)=> {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let datos_direccion = document.getElementById("datos_direccion").value;
    let password = document.getElementById("password").value;
    let conf_password = document.getElementById("conf_password").value;

    let transaccion = {nombre: nombre, telefono:telefono, email:email, direccion:direccion,datos_direccion:datos_direccion,password:password,conf_password:conf_password}
    let transaccionJson= JSON.stringify(transaccion);
    
    //Se manda la trnasaccion al backend

    fetch('http://localhost:3000/transaction',{

        method: 'post',
        body: transaccionJson
    })

})