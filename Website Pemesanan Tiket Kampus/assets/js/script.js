// ===============================
// GLOBAL SCRIPT (script.js)
// ===============================

// NAVBAR SHRINK ON SCROLL
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

// ACTIVE NAV LINK AUTO-HIGHLIGHT
document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
