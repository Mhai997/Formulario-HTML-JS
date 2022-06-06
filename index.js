const nombre = document.getElementById('name');
const apellido = document.getElementById('last_name');
const cedula = document.getElementById('cedula');
const email = document.getElementById('email');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');

form.addEventListener("submit", e =>{
    e.preventDefault();
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    let warning = "";
    if(nombre.value.length < 6){
        warning += `El nombre no es valido <br>`;
    }
    if(apellido.value.length < 6){
        warning += `El apellido no es valido <br>`;
    }
    console.log(emailRegex.test(email.value))
    if(emailRegex.test(email.value)){

    }
})