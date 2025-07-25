window.addEventListener("load", function() {
    // Initialize EmailJS with your public key
    emailjs.init("8RJfhEjzdRZhgRl_1");

    // Handle form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm("service_4wfloxx", "template_m0z3yf9", this)
            .then(function() {
                alert("Message sent successfully!");
                event.target.reset();
            }, function(error) {
                console.error("Email send error:", error);
                alert("Failed to send message. Check console.");
            });
    });
});

// Scroll Sections Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let navbar = document.querySelector(".navbar");
let menuIcon = document.getElementById("menu-icon");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });
            document
                .querySelector(`header nav a[href*=${id}]`)
                .classList.add("active");

            // Hide the navbar if menu icon is in 'active' state
            if (navbar.classList.contains("active")) {
                navbar.classList.remove("active");
                menuIcon.classList.remove("bx-x");
            }
        }
    });

    // Sticky header logic
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
};

// Scroll Reveal
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal(".home-content", { origin: "top" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });
ScrollReveal().reveal(".tech-stack", { origin: "left" });
ScrollReveal().reveal(".my-experience", { origin: "right" });
ScrollReveal().reveal(".projects .heading", { origin: "top" });
ScrollReveal().reveal(".image-part", { origin: "left" });
ScrollReveal().reveal(".activity-box", { origin: "right" });
ScrollReveal().reveal(".image-container", { origin: "left" });
ScrollReveal().reveal(".form", { origin: "right" });

// Typed Animation
var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Tech Blogger"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});

// Toggle Navbar Visibility
menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("active"); // Toggle the active class to show/hide the menu
    menuIcon.classList.toggle("bx-x"); // Toggle the icon
});