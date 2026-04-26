document.addEventListener('DOMContentLoaded', function () {
    const toggleHeader = document.getElementById('toggleHeader');
    const mobileMenu = document.getElementById('mobile-menu');

    toggleHeader.addEventListener('click', function () {
        mobileMenu.classList.toggle('shown');
        if (mobileMenu.classList.contains('shown')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // const themeToggler = document.getElementById('theme-toggler');
    // const html = document.documentElement;
    // const body = document.body;

    // // Load theme from localStorage or fallback to light
    // let currentTheme = localStorage.getItem('theme') || 'light';
    // html.setAttribute('data-theme', currentTheme);
    // body.classList.toggle('dark-theme', currentTheme === 'dark');

    // // Theme toggle handler
    // themeToggler.addEventListener('click', function () {
    //     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    //     html.setAttribute('data-theme', newTheme);
    //     body.classList.toggle('dark-theme', newTheme === 'dark');
    //     localStorage.setItem('theme', newTheme);
    //     currentTheme = newTheme; // ✅ update current theme reference
    // });

});