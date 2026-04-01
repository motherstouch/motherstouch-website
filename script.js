console.log("Mother’s Touch website is running beautifully!");

// Fade-up animation
const animatedSections = document.querySelectorAll(
  ".hero, .problems-section, .services-section, .packages-section, .about-section, .why-section, .testimonials-section, .faq-section, .contact-section"
);

animatedSections.forEach(section => {
  section.classList.add("fade-up");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

animatedSections.forEach(section => {
  observer.observe(section);
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      mobileNav.classList.toggle("active");
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("active");
    });
  });
});
