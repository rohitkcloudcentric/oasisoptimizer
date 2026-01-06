// AOS Animation JS Start Here
let scrollPos = 0;

// Save scroll before reload
window.addEventListener('beforeunload', () => {
    scrollPos = window.scrollY;
});

// Restore after reload
window.addEventListener('load', () => {
    window.scrollTo(0, scrollPos);
    AOS.init({
        duration: 800,
        once: true,
        mirror: true,
        easing: 'ease-in'
    });
});
AOS.init({
    duration: 900,
    easing: 'ease-out-cubic',
    once: true,
    offset: 120,
    mirror: false
});
// AOS Animation JS End Here

// Header Stacky on Page scroll
const header = document.getElementById("site-header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    lastScroll = currentScroll;
});
