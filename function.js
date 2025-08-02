// Image Slider

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider() {
    if(slides.length > 0){
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }

}

function showSlide(index) {
    if(index >= slides.length) {
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length - 1; 
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add('displaySlide');
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create WhatsApp message link
  const waNumber = '6282283068085';  // Ganti dengan nomor WhatsApp yang diinginkan
  const waMessage = `Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  // Redirect to WhatsApp with the message
  window.open(waLink, '_blank');
});