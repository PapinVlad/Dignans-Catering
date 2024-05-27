

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("carousel-dot");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block"; 
    dots[slideIndex].className += " active";
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}