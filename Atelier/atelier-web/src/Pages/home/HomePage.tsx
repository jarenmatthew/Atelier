import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const Home: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [popupDescription, setPopupDescription] = useState('');
  const [popupImageSrc, setPopupImageSrc] = useState('');
  const [popupDisplay, setPopupDisplay] = useState('none');
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

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

  const showDescription = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const image = e.currentTarget;
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

  return (
    <div>
      <header>
        <section id="header">
          <a href="#"><img src="../assets/img/logo.jpg" className="logo" alt="" /></a>
          <h2><a href="HomePage.tsx">Atelier</a></h2>
          <div>
            <ul id="navbar">
              <li><a href="HomePage.tsx">Home</a></li>
              <li><a href="explore.html">Explore</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="about.html">About Us</a></li>
            </ul>
          </div>
          <a href="profile.html"><img src="assets/img/profile.png" className="prof" alt="" /></a>
        </section>
      </header>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src="../assets/img/image1.png" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src="../assets/img/image2.png" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src="assets/img/image3.png" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src="assets/img/image4.png" style={{ width: "100%" }} />
        </div>
        <div className="dot-container">
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>

      <h4>Featured Artists</h4>
      <div className="artists-container">
        <img className="featured-artist" width="350" height="100" src="assets/img/cover1.png" />
        <img className="featured-artist" width="350" height="100" src="assets/img/cover2.png" />
        <img className="featured-artist" width="350" height="100" src="assets/img/cover3.png" />
        <img className="featured-artist" width="350" height="100" src="assets/img/cover1.png" />
        <img className="featured-artist" width="350" height="100" src="assets/img/cover2.png" />
        <img className="featured-artist" width="350" height="100" src="assets/img/cover3.png" />
      </div>

      <h4>Explore</h4>
      <div className="collage">
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image5.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image6.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image7.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image8.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image9.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image10.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image11.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image12.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image13.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image14.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image15.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        <div className="collage_pics" data-description="Whale House, John Doe">
          <img src="assets/img/image16.png" style={{ width: '100%' }} onClick={showDescription} />
        </div>
        
      </div>

      <div id="popup-container" className="popup-container" onClick={handleClosePopup} style={{ display: popupDisplay }}>
        <div id="popup-content" className="popup-content">
          <img id="popup-image" src={popupImageSrc} alt="Clicked Image" />
          <p id="popup-description">{popupDescription}</p>
        </div>
      </div>

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
            <a href="about.html"><img src="assets/img/profile.png" className="socmed" alt="" /></a>
            <a href="about.html"><img src="assets/img/profile.png" className="socmed" alt="" /></a>
            <a href="about.html"><img src="assets/img/profile.png" className="socmed" alt="" /></a>
            <a href="about.html"><img src="assets/img/profile.png" className="socmed" alt="" /></a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Home;
