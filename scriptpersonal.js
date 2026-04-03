// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Scroll to top button features
window.addEventListener('scroll', function () {
    let button = document.getElementById('scroll-to-top');
    if (window.scrollY > 500) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

