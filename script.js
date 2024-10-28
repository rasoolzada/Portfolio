

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
    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const sidebar = document.querySelector(".sidebar");

        // Toggle sidebar visibility on hamburger click
        hamburger.addEventListener("click", function () {
            sidebar.style.display = (sidebar.style.display === "flex") ? "none" : "flex";
        });
    });

 
