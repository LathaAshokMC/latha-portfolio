// JavaScript connected successfully!

console.log("JavaScript connected successfully!");

//========================
// Mobile Navigation
//========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// ==============================
// Dynamic Footer Year
// ==============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// ==============================
// Contact Form Validation
// ==============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been received.";
    contactForm.reset();
});

// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");
const navLinksList = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinksList.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});