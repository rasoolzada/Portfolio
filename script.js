// Fade in sections on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content-section");

    const fadeInSection = (section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
            section.style.opacity = "1";
        }
    };

    window.addEventListener("scroll", () => {
        sections.forEach(fadeInSection);
    });
});

// Project Slider (Manual Scroll)
document.querySelector('.project-slider').addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        e.target.scrollBy(300, 0);
    } else {
        e.target.scrollBy(-300, 0);
    }
});
