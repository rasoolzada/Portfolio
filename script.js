document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-left, .animate-right");

    function checkPosition() {
        animatedElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Add 'active' class when the element is visible in the viewport
            if (position < windowHeight - 100) {
                element.classList.add("active");
            }
        });
    }

    // Run the checkPosition function on scroll
    window.addEventListener("scroll", checkPosition);
    // Initial check on page load
    checkPosition();
});
