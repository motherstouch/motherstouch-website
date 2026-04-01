console.log("Mother’s Touch website is running beautifully!");

// Fade-up animation
const animatedSections = document.querySelectorAll(
  ".hero, .problems-section, .services-section, .packages-section, .about-section, .why-section, .testimonials-section, .faq-section, .contact-section"
);

animatedSections.forEach(section => {
  section.classList.add("fade-up");
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
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
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

// Auto close menu after click
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});
