/*carrusel 2*/
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const track = document.querySelector(".gallery-carousel .carousel-track");
    const images = document.querySelectorAll(".gallery-carousel .carousel-track img");
    const totalImages = images.length;
    const imagesPerView = 3;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * (100 / imagesPerView)}%)`;
    }

    function moveSlide(step) {
        index += step;
        if (index < 0) {
            index = totalImages - imagesPerView;
        } else if (index > totalImages - imagesPerView) {
            index = 0;
        }
        updateCarousel();
    }

    // Cambio automático cada 3 segundos
    setInterval(() => moveSlide(1), 4000);

   // Abrir imagen en modal con descripción
   window.openImage = function (img) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const description = document.getElementById("imageDescription"); // Selecciona el párrafo de descripción

    fullImage.src = img.src;
    description.textContent = img.getAttribute("data-desc") || img.alt; // Asigna la descripción

    modal.style.display = "flex";
};

// Cerrar imagen modal
window.closeImage = function () {
    document.getElementById("imageModal").style.display = "none";
};

    window.moveSlide = moveSlide; // Hacer la función accesible desde el HTML
});
