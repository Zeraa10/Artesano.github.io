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
          <a href="admin_dashboard.html">Inicio</a>
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
        <a href="seller_dashboard.html">Inicio</a>
        <a href="catalog.html">Catálogo</a>
        <a href="help.html">Contactanos</a>
        <a href="login.html">Cerrar Sesión</a>
    `;
}
});

// Inicializar carrusel
document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('#main-slider', {
    type: 'fade',
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
  });

  var thumbnails = new Splide('#thumbnail-slider', {
    fixedWidth: 104,
    fixedHeight: 58,
    isNavigation: true,
    gap: 10,
    focus: 'center',
    pagination: false,
    cover: true,
    breakpoints: {
      640: {
        fixedWidth: 66,
        fixedHeight: 38,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});