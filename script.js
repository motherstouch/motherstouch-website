// ================================
// MOBILE HAMBURGER MENU
// ================================
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
}

// Close menu after clicking any nav link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileNav) {
      mobileNav.classList.remove("active");
    }
  });
});

// ================================
// FADE-UP SCROLL ANIMATION
// ================================
const fadeElements = document.querySelectorAll(".fade-up");

if (fadeElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  fadeElements.forEach((el) => observer.observe(el));
}

// ================================
// OPTIONAL: CLOSE MENU IF USER CLICKS OUTSIDE
// ================================
document.addEventListener("click", function (event) {
  if (
    mobileNav &&
    menuToggle &&
    !mobileNav.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    mobileNav.classList.remove("active");
  }
});

// ================================
// OPTIONAL: CLOSE MENU WHEN SCREEN RESIZES TO DESKTOP
// ================================
window.addEventListener("resize", () => {
  if (window.innerWidth > 992 && mobileNav) {
    mobileNav.classList.remove("active");
  }
});
