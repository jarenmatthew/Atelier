import React, { useState } from 'react';
import './HomePage.css';

const Home: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [popupDescription, setPopupDescription] = useState('');
  const [popupImageSrc, setPopupImageSrc] = useState('');
  const [popupDisplay, setPopupDisplay] = useState('none');

  const showSlides = (n: number) => {
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) setSlideIndex(1);
    if (n < 1) setSlideIndex(slides.length);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  const plusSlides = (n: number) => {
    setSlideIndex(slideIndex + n);
    showSlides(slideIndex);
  };

  const currentSlide = (n: number) => {
    setSlideIndex(n);
    showSlides(n);
  };

  const showDescription = (image: HTMLImageElement) => {
    const description = image.parentElement?.getAttribute('data-description') || '';
    setPopupDescription(description);
    setPopupImageSrc(image.src);
    setPopupDisplay('block');
  };

  const handleClosePopup = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setPopupDisplay('none');
    }
  };

  const collagePics = document.querySelectorAll('.collage_pics');

  return (
    <div>
      <header>
        <section id="header">
          <a href="#"><img src="img/logo.jpg" className="logo" alt="" /></a>
          <h2><a href="home.html">Atelier</a></h2>
          <div>
            <ul id="navbar">
              <li><a href="home.html">Home</a></li>
              <li><a href="explore.html">Explore</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="about.html">About Us</a></li>
            </ul>
          </div>
          <a href="profile.html"><img src="img/profile.png" className="prof" alt="" /></a>
        </section>
      </header>

      {/* Slideshow */}
      <div className="slideshow-container">
        {/* Slides */}
        {/* Your slide components here */}
      </div>

      {/* Featured Artists */}
      <h4>Featured Artists</h4>
      <div className="artists-container">
        {/* Your featured artists components here */}
      </div>

      {/* Explore */}
      <h4>Explore</h4>
      <div className="collage">
        {/* Your explore collage components here */}
      </div>

      {/* Pop-up container */}
      <div id="popup-container" className="popup-container" onClick={handleClosePopup} style={{ display: popupDisplay }}>
        <div id="popup-content" className="popup-content">
          <img id="popup-image" src={popupImageSrc} alt="Clicked Image" />
          <p id="popup-description">{popupDescription}</p>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <section id="footer">
          <div>
            <h2><a href="home.html">Atelier</a></h2>
            <ul id="footer-navbar">
              <li><a href="home.html">About Us</a></li>
              <li><a href="explore.html">Terms and Conditions</a></li>
              <li><a href="shop.html">Contact Us</a></li>
              <li><a href="about.html">Link 4</a></li>
            </ul>
          </div>
          <div>
            <a href="about.html"><img src="img/profile.png" className="socmed" alt="" /></a>
            <a href="about.html"><img src="img/profile.png" className="socmed" alt="" /></a>
            <a href="about.html"><img src="img/profile.png" className="socmed" alt="" /></a>
            <a href="about.html"><img src="img/profile.png" className="socmed" alt="" /></a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Home;
