import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../FirebaseConfig';
import './HomePage.css';

const Home: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [popupDescription, setPopupDescription] = useState('');
  const [popupImageSrc, setPopupImageSrc] = useState('');
  const [popupDisplay, setPopupDisplay] = useState('none');
  const [facebookIconURL, setFacebookIconURL] = useState('');
  const [twitterIconURL, setTwitterIconURL] = useState('');
  const [messengerIconURL, setMessengerIconURL] = useState('');
  const [instagramIconURL, setInstagramIconURL] = useState('');
  const [logoIconURL, setLogoIconURL] = useState('');
  const [profileIconURL, setProfileIconURL] = useState('');
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  useEffect(() => {
    fetchIconURLs(); // Fetch icon URLs
  }, []);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const fetchIconURLs = async () => {
    try {
      // Fetch icon URLs from Firebase Storage
      const storageRef = ref(storage, 'icons');
      const facebookURL = await getDownloadURL(ref(storageRef, 'facebook.png'));
      const twitterURL = await getDownloadURL(ref(storageRef, 'twitter.png'));
      const instagramURL = await getDownloadURL(ref(storageRef, 'instagram.png'));
      const messengerURL = await getDownloadURL(ref(storageRef, 'messenger.png'));
      const logoURL = await getDownloadURL(ref(storageRef, 'logo.jpg'));
      const profileURL = await getDownloadURL(ref(storageRef, 'profile.png'));
      setFacebookIconURL(facebookURL);
      setTwitterIconURL(twitterURL);
      setInstagramIconURL(instagramURL);
      setMessengerIconURL(messengerURL);
      setLogoIconURL(logoURL);
      setProfileIconURL(profileURL);

      // Fetch image URLs from Firebase Storage
      const imageRef = ref(storage, 'img');
      const urls: string[] = await Promise.all([
        'image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png',
        'image6.png', 'image7.png', 'image8.png', 'image9.png', 'image10.png', 'image11.png',
        'image12.png', 'image13.png', 'image14.png', 'image15.png', 'image16.png',
        'image17.png', 'image18.png', 'image19.png', 'image20.png', 'image21.png',
        'image22.png', 'image23.png', 'image24.png', 'cover1.png', 'cover2.png', 'cover3.png',// Add all image names here
      ].map(async (imageName) => {
        return await getDownloadURL(ref(imageRef, imageName));
      }));
      const shuffledImageURLs = shuffleArray(urls);
      setImageURLs(shuffledImageURLs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const showSlides = (n: number) => {
    // Ensure that slides exist before accessing their properties
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (slides.length === 0 || dots.length === 0) {
      // Elements not found, wait for the next render
      return;
    }
    
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
          <a href="#"><img src={logoIconURL} className="logo" alt="" /></a>
          <h2><a href="/home">Atelier</a></h2>
          <div>
            <ul id="navbar">
              <li><a href="/home">Home</a></li>
              <li><a href="explore.html">Explore</a></li>
              <li><a href="/Product">Shop</a></li>
              <li><a href="about.html">About Us</a></li>
            </ul>
          </div>
          <a href="/Signup"><img src={profileIconURL} className="profile" alt="" /></a>
        </section>
      </header>

      <Box style={{ marginBottom: '100px' }}>
        <div className="slideshow-container">
          {imageURLs.map((url, index) => (
            <div key={index} className="mySlides fade">
              <img src={url} style={{ width: "100%" }} />
            </div>
          ))}
          <div className="dot-container">
            {imageURLs.map((_, index) => (
              <span key={index} className="dot" onClick={() => currentSlide(index + 1)}></span>
            ))}
          </div>
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
      </Box>

      <Box style={{ marginBottom: '100px' }}>
        <h4>Featured Artists</h4>
        <div className="artists-container">
          {imageURLs.slice(0, 6).map((url, index) => (
            <img key={index} className="featured-artist" src={url} />
          ))}
        </div>
      </Box>

      <Box style={{ marginBottom: '100px' }}>
        <h4>Explore</h4>
        <div className="collage">
          {imageURLs.slice(6).map((url, index) => (
            <div key={index} className="collage_pics" data-description="Whale House, John Doe">
              <img src={url} style={{ width: '100%' }} onClick={showDescription} />
            </div>
          ))}
        </div>
      </Box>

      <div id="popup-container" className="popup-container" onClick={handleClosePopup} style={{ display: popupDisplay }}>
        <div id="popup-content" className="popup-content">
          <img id="popup-image" src={popupImageSrc} alt="Clicked Image" />
          <p id="popup-description">{popupDescription}</p>
        </div>
      </div>

      <div id="footer">
          <div>
            <h2>Atelier</h2>
            <ul id="footer-navbar">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="socMedIcons">
            <img src={twitterIconURL} alt="Twitter" className="socmed" />
            <img src={facebookIconURL} alt="Facebook" className="socmed" />
            <img src={messengerIconURL} alt="Messenger" className="socmed" />
            <img src={instagramIconURL} alt="Instagram" className="socmed" />
          </div>
        </div>

        <div id="copyright">
          <h3>Copyrights 2024</h3>
        </div>
    </div>
  );
};

export default Home;
