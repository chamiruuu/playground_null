document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('language-toggle').addEventListener('click', () => {
    alert('Language toggle clicked!');
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const iconButtons = document.getElementById('icon-buttons');

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        // Collapse navbar when not at the top
        navbar.classList.add('collapsed');
        logo.classList.add('hidden');
        iconButtons.classList.add('hidden');
    } else {
        // Show default navbar when at the top
        navbar.classList.remove('collapsed');
        logo.classList.remove('hidden');
        iconButtons.classList.remove('hidden');
    }
});