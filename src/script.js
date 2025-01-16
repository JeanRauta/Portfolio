document.querySelector('.about').addEventListener('click', function() {
    scrollar(document.querySelector('.aboutFlag'));
});
document.querySelector('.works').addEventListener('click', function() {
    scrollar(document.querySelector('.worksFlag'));
});

function scrollar(elemento) {
    elemento.scrollIntoView({ behavior: "smooth" });
}

function img01() {
    window.open("https://github.com/JeanRauta/chordinoAPI", "_blank");
}

function img02() {
    window.open("https://comebem.onrender.com/", "_blank");
}

function img03() {
    window.open("https://github.com/JeanRauta/chatapi.git", "_blank");
}
