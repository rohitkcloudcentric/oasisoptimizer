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



/* ============================ */
/* SCROLL COUNTING ANIMATION */
/* ============================ */
const counters = document.querySelectorAll('.counter');
let started = false;

const startCounting = () => {
    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        const prefix = counter.dataset.prefix || '';
        const suffix = counter.dataset.suffix || '';
        const decimals = target % 1 !== 0 ? 2 : 0;

        let current = 0;
        const increment = target / 100;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = `${prefix}${current.toFixed(decimals)}${suffix}`;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = `${prefix}${target.toFixed(decimals)}${suffix}`;
            }
        };

        updateCounter();
    });
};

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
        started = true;
        startCounting();
    }
}, {
    threshold: 0.4
});

observer.observe(document.querySelector('.stats-wrapper'));



// Swiper Slider JS
new Swiper('.software-partner-slider', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 800,
    spaceBetween: 30,
    slidesPerView: 5,

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        }
    }
});