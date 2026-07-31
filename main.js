// EcoPlus - Main JavaScript

console.log("EcoPlus website loaded successfully!");

// Contact Form Message
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for contacting EcoPlus! 🌿 Your response has been received.");

        // Clear the form after submission
        contactForm.reset();
    });
}