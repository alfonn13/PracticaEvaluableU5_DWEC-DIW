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

});

document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById('menu-icon');

    menuIcon.addEventListener('click', function() {
        toggleMenu();
    });
});

function toggleMenu() {
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var crossIcon = document.getElementById('cross-icon');

    // Verificar el estado actual y cambiar la visibilidad en consecuencia
    if (hamburgerIcon.style.display === 'none') {
        // Si el ícono de hamburguesa está oculto, mostrarlo y ocultar la cruz
        hamburgerIcon.style.display = '';
        crossIcon.style.display = 'none';
    } else {
        // Si el ícono de hamburguesa está visible, ocultarlo y mostrar la cruz
        hamburgerIcon.style.display = 'none';
        crossIcon.style.display = '';
    }
}

