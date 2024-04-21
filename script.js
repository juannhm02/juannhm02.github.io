// JavaScript opcional para agregar interactividad
document.addEventListener('DOMContentLoaded', function() {
    const changeThemeButton = document.getElementById('change-theme-btn');

    if (changeThemeButton) {
        changeThemeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
        });
    }
});

// Función para alternar los estilos del tema oscuro
function toggleDarkTheme() {
    var body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === 'rgb(52, 58, 64)' ? '#f4f4f4' : 'rgb(52, 58, 64)';
    body.style.color = body.style.color === 'rgb(255, 255, 255)' ? '#333' : 'rgb(255, 255, 255)';
}
