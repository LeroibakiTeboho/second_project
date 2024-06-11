const initApp = () => {

    // get ids
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // toggle function
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');
    }

    hamburgerBtn.addEventListener( 'click', toggleMenu);
    mobileMenu.addEventListener( 'click', toggleMenu);
}

// This code means that the 'initApp' function will be called once the HTML document has been fully loaded and parsed. It ensures that initialization code runs only after the document is ready.
document.addEventListener('DOMContentLoaded', initApp);




