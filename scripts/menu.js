document.addEventListener("DOMContentLoaded", function() {
    var menuHamburguesa = document.getElementById("menu_hamburguesa");

    menuHamburguesa.addEventListener("change", function() {
        // Verificar si el botón de hamburguesa está activo
        if (menuHamburguesa.checked) {
            // Bloquear el desplazamiento
            document.body.style.overflow = "hidden";
        } else {
            // Habilitar el desplazamiento
            document.body.style.overflow = "visible";
        }
    });

    // Otros eventos o funciones relacionados con el scroll u otras interacciones aquí...
});