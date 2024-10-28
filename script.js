

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-section");

    // Initially add 'hidden' class to each section
    sections.forEach(section => section.classList.add("hidden"));

    // Set up the intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Remove 'hidden' class and add alternating animation classes
                entry.target.classList.remove("hidden");
                if (index % 2 === 0) {
                    entry.target.classList.add("slide-in-left");
                } else {
                    entry.target.classList.add("slide-in-right");
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.2 });

    // Observe each section
    sections.forEach(section => observer.observe(section));
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("hidden");
                entry.target.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right");
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    });

    sections.forEach(section => observer.observe(section));
});


//For mobile
// For mobile sidebar toggle
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}

// Auto-hide sidebar on scroll or touch events
window.addEventListener('scroll', () => {
    document.querySelector('.sidebar').classList.remove('active');
});

window.addEventListener('touchstart', () => {
    document.querySelector('.sidebar').classList.remove('active');
});


 
