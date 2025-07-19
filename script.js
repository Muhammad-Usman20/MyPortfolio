// Simple fade-in effect on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        const height = sec.offsetHeight;
        if (top > offset && top < offset + height) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 0.6s ease";
});
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');
}