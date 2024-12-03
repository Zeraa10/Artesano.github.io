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