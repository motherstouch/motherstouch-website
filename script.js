// ==========================
// HAMBURGER MENU
// ==========================
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", function () {
    mobileNav.classList.toggle("active");

    if (mobileNav.classList.contains("active")) {
      menuToggle.innerHTML = "✕";
      menuToggle.setAttribute("aria-label", "Close Menu");
    } else {
      menuToggle.innerHTML = "☰";
      menuToggle.setAttribute("aria-label", "Open Menu");
    }
  });
}

// Close menu after clicking link on mobile
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 992) {
      mobileNav.classList.remove("active");
      menuToggle.innerHTML = "☰";
      menuToggle.setAttribute("aria-label", "Open Menu");
    }
  });
});

// ==========================
// SCROLL ANIMATION
// ==========================
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));

// ==========================
// LANGUAGE SWITCH
// ==========================
const langEn = document.getElementById("langEn");
const langGu = document.getElementById("langGu");

function setLanguage(lang) {
  localStorage.setItem("siteLanguage", lang);

  // Text content
  document.querySelectorAll("[data-en][data-gu]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // Input placeholders
  document.querySelectorAll("[data-placeholder-en][data-placeholder-gu]").forEach(el => {
    el.placeholder = el.getAttribute(`data-placeholder-${lang}`);
  });

  // Select options
  document.querySelectorAll("option[data-en][data-gu]").forEach(option => {
    option.textContent = option.getAttribute(`data-${lang}`);
  });

  // Buttons active state
  if (lang === "en") {
    langEn.classList.add("active");
    langGu.classList.remove("active");
    document.documentElement.lang = "en";
  } else {
    langGu.classList.add("active");
    langEn.classList.remove("active");
    document.documentElement.lang = "gu";
  }
}

if (langEn && langGu) {
  langEn.addEventListener("click", () => setLanguage("en"));
  langGu.addEventListener("click", () => setLanguage("gu"));
}

// Load saved language
const savedLanguage = localStorage.getItem("siteLanguage") || "en";
setLanguage(savedLanguage);

// ==========================
// CONTACT FORM -> WHATSAPP
// ==========================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const phone = contactForm.querySelector('input[type="tel"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const concern = contactForm.querySelector("select").value;
    const message = contactForm.querySelector("textarea").value.trim();

    const lang = localStorage.getItem("siteLanguage") || "en";

    let whatsappText = "";

    if (lang === "gu") {
      whatsappText =
`નમસ્તે, હું Mother’s Touch માટે સંપર્ક કરું છું.

નામ: ${name}
ફોન: ${phone}
ઈમેઈલ: ${email}
મદદ જોઈએ છે: ${concern}
સમસ્યા: ${message}`;
    } else {
      whatsappText =
`Hello, I am contacting Mother’s Touch.

Name: ${name}
Phone: ${phone}
Email: ${email}
Need help with: ${concern}
Concern: ${message}`;
    }

    const whatsappURL = `https://wa.me/919274284078?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappURL, "_blank");
  });
}
