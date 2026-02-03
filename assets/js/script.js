// ACTIVE NAV LINK AUTO-HIGHLIGHT
document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
