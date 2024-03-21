import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from "./img/logo.jpg";
import prof from "./img/profile.png";
import image1 from "./img/image1.png";
import image2 from "./img/image2.png";
import image3 from "./img/image3.png";
import image4 from "./img/image4.png";
import image5 from "./img/image5.png";
import image6 from "./img/image6.png";
import image7 from "./img/image7.png";
import image8 from "./img/image8.png";
import image9 from "./img/image9.png";
import image10 from "./img/image10.png";
import cover1 from "./img/cover1.png";
import cover2 from "./img/cover2.png";
import cover3 from "./img/cover3.png";
import { Box } from '@mui/material';

const Home: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [popupDescription, setPopupDescription] = useState('');
  const [popupImageSrc, setPopupImageSrc] = useState('');
  const [popupDisplay, setPopupDisplay] = useState('none');
  const navigate = useNavigate();

  useEffect(() => {
    showSlides(slideIndex); 
    navigate('/home'); 
  }, [navigate, slideIndex]);


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
    const newIndex = slideIndex + n;
    setSlideIndex(newIndex);
    showSlides(newIndex);
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
          <a href="#"><img src={logo} className="logo" alt="" /></a>
          <h2><a href="/home">Atelier</a></h2>
          <div>
            <ul id="navbar">
              <li><a href="/home">Home</a></li>
              <li><a href="explore.html">Explore</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="about.html">About Us</a></li>
            </ul>
          </div>
          <a href="/Signup"><img src={prof} className="profile" alt="" /></a>
        </section>
      </header>

      <Box style={{ marginBottom: '100px' }}>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img src={image1} style={{ width: "100%" }} />
          </div>
          <div className="mySlides fade">
            <img src={image2} style={{ width: "100%" }} />
          </div>
          <div className="mySlides fade">
            <img src={image3} style={{ width: "100%" }} />
          </div>
          <div className="mySlides fade">
            <img src={image4} style={{ width: "100%" }} />
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
      </Box>

      <Box style={{ marginBottom: '100px' }}>
        <h4>Featured Artists</h4>
        <div className="artists-container">
          <img className="featured-artist" width="350" height="100" src={cover1} />
          <img className="featured-artist" width="350" height="100" src={cover2} />
          <img className="featured-artist" width="350" height="100" src={cover3} />
          <img className="featured-artist" width="350" height="100" src={cover1} />
          <img className="featured-artist" width="350" height="100" src={cover2} />
          <img className="featured-artist" width="350" height="100" src={cover3} />
        </div>
      </Box>

      <Box style={{ marginBottom: '100px' }}>
        <h4>Explore</h4>
        <div className="collage">
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image5} style={{ width: '100%', height: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image6} style={{ width: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image7} style={{ width: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image8} style={{ width: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image9} style={{ width: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image10} style={{ width: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image1} style={{ width: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image2} style={{ width: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image3} style={{ width: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image4} style={{ width: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image5} style={{ width: '100%' }} onClick={showDescription} />
          </div>
          <div className="collage_pics" data-description="Whale House, John Doe">
            <img src={image6} style={{ width: '100%' }} onClick={showDescription} />
          </div>
        </div>
      </Box>

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
