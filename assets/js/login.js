document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);


// Decalaracion de variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");


function login() {
    const email = document.getElementById("correo").value;
    const password = document.getElementById("contrasena").value;
    const role = document.getElementById("role").value;

    if (email && password) { 
        // Guardar el rol en sessionStorage o localStorage
        sessionStorage.setItem("userRole", role);

        // Redirigir según el rol
        if (role === "admin") {
            window.location.href = "admin_dashboard.html";
        } else if (role === "seller") {
            window.location.href = "seller_dashboard.html";
        } else {
            window.location.href = "index.html";
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
}


function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.position = "relative";
        caja_trasera_register.style.position = "relative";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
    } else {
        caja_trasera_login.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();


function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}


function register(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}