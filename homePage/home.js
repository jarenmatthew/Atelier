let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// JavaScript for handling click events and displaying pop-up

// Get all collage pictures
const collagePics = document.querySelectorAll('.collage_pics');

// Get pop-up container and its content
const popupContainer = document.getElementById('popup-container');
const popupContent = document.getElementById('popup-content');
const popupImage = document.getElementById('popup-image');
const popupDescription = document.getElementById('popup-description');

// Attach click event listeners to each collage picture
collagePics.forEach(pic => {
  pic.addEventListener('click', () => {
      // Get the image source and description of the clicked picture
      const imageSrc = pic.querySelector('img').src;
      const description = pic.getAttribute('data-description');

      // Set the image source and description in the pop-up content
      popupImage.src = imageSrc;

      // Replace the comma with a line break between "Whale House" and "John Doe"
      const formattedDescription = description.replace(', ', '<br>');

      // Set the formatted description in the pop-up content
      popupDescription.innerHTML = formattedDescription;

      // Show the pop-up container
      popupContainer.style.display = 'block';
  });
});

// Close the pop-up when clicking outside of it or on the close button
popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});
