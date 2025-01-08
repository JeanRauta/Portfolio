document.querySelector('.about').addEventListener('click', function() {
    scrollar(document.querySelector('.aboutFlag'));
});
document.querySelector('.works').addEventListener('click', function() {
    scrollar(document.querySelector('.worksFlag'));
});
document.querySelector('.resume').addEventListener('click', function() {
    scrollar(document.querySelector('.resumeFlag'));
});

function scrollar(elemento) {
    elemento.scrollIntoView({ behavior: "smooth" });
}
