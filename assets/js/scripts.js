//header efecto
var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})

//header admin y vendedor
document.addEventListener("DOMContentLoaded", () => {
    const role = sessionStorage.getItem("userRole");
    const nav = document.querySelector(".navegacion");
    
    if (role === "admin") {
        nav.innerHTML = `
            <a href="index.html">Inicio</a>
            <a href="catalog.html">Catálogo</a>
          <a href="admin_settings.html">Configuraciones</a>
            <a href="login.html">Cerrar Sesión</a>
        `;
    } else if (role === "user") {
        nav.innerHTML = `
            <a href="index.html">Inicio</a>
            <a href="catalog.html">Catálogo</a>
            <a href="help.html">Contactanos</a>
            <a href="login.html">Cerrar Sesión</a>
        `;
    } else if (role === "seller") {
      nav.innerHTML = `
          <a href="index.html">Inicio</a>
          <a href="catalog.html">Catálogo</a>
          <a href="help.html">Contactanos</a>
          <a href="login.html">Cerrar Sesión</a>
      `;
  }
  });

// carrusel de imagenes
document.addEventListener("DOMContentLoaded", () => {
    var splide = new Splide('.splide', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: true,
        interval: 3000, 
        breakpoints: {
            768: {
                perPage: 2, 
            },
            480: {
                perPage: 1,
            },
        },
    });

    splide.mount();
});

