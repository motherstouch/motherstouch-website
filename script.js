console.log("Mother’s Touch website is running beautifully!");

// Add fade-up animation to all main sections
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
