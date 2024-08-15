let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-images img");
    console.log(slides);
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const offset = -currentIndex * 110;
    document.querySelector(".carousel-images").style.transform =
        `translateX(${offset}%)`;
}
