

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
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.remove('active');
    });
});




 // Function to handle link clicks
 document.addEventListener('DOMContentLoaded', function() {
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

    const links = document.querySelectorAll('.sidebar nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden'); // Ensure section is visible
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Handle visited links
            links.forEach(l => l.classList.remove('visited'));
            this.classList.add('visited');

            // Store visited link in localStorage
            const visitedLinks = JSON.parse(localStorage.getItem('visitedLinks')) || [];
            if (!visitedLinks.includes(targetId)) {
                visitedLinks.push(targetId);
                localStorage.setItem('visitedLinks', JSON.stringify(visitedLinks));
            }
        });
    });
    
    // Restore visited state on page load
    const storedLinks = JSON.parse(localStorage.getItem('visitedLinks')) || [];
    storedLinks.forEach(link => {
        const visitedLink = document.querySelector(`.sidebar nav ul li a[href="${link}"]`);
        if (visitedLink) {
            visitedLink.classList.add('none');
        }
    });
});

//Corsor on Hero Text
setTimeout(() => {
    document.getElementById('typewriter').classList.add('typing-complete');
}, 4000); 

//Eduction Section
document.addEventListener("DOMContentLoaded", function() {
    const educationHeaders = document.querySelectorAll(".education-header");

    educationHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const item = header.parentElement;
            const icon = header.querySelector(".icon");
            
            // Toggle the active class for expanding/collapsing
            item.classList.toggle("active");

            // Change icon based on active state
            icon.textContent = item.classList.contains("active") ? "−" : "+";
        });
    });
});

//SoftSkills

