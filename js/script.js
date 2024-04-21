document.addEventListener('DOMContentLoaded', function() {
    const changeThemeButton = document.getElementById('change-theme-btn');

    if (changeThemeButton) {
        changeThemeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            var links = document.querySelectorAll('a');
            links.forEach(link => {
                link.classList.toggle('dark-theme');
            });
        });
    }
});
