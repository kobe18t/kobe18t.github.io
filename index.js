const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList,toggle('nav-active');
    })
    //Animate Links
    navLinks.forEach((link, index) => {
        console.log(index);
    });
}

navSlide();

