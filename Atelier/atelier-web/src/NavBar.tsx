import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../FirebaseConfig';

const HeaderFooter: React.FC = () => {
  const [logoIconURL, setLogoIconURL] = useState('');
  const [facebookIconURL, setFacebookIconURL] = useState('');
  const [twitterIconURL, setTwitterIconURL] = useState('');
  const [messengerIconURL, setMessengerIconURL] = useState('');
  const [instagramIconURL, setInstagramIconURL] = useState('');
  const [profileIconURL, setProfileIconURL] = useState('');

  useEffect(() => {
    fetchIconURLs(); // Fetch icon URLs
  }, []);

  const fetchIconURLs = async () => {
    try {
      // Fetch icon URLs from Firebase Storage
      const iconsRef = ref(storage, 'icons');
      const logoURL = await getDownloadURL(ref(iconsRef, 'logo.jpg'));
      const facebookURL = await getDownloadURL(ref(iconsRef, 'facebook.png'));
      const twitterURL = await getDownloadURL(ref(iconsRef, 'twitter.png'));
      const instagramURL = await getDownloadURL(ref(iconsRef, 'instagram.png'));
      const messengerURL = await getDownloadURL(ref(iconsRef, 'messenger.png'));
      const profileURL = await getDownloadURL(ref(iconsRef, 'profile.png'));
      
      setLogoIconURL(logoURL);
      setFacebookIconURL(facebookURL);
      setTwitterIconURL(twitterURL);
      setInstagramIconURL(instagramURL);
      setMessengerIconURL(messengerURL);
      setProfileIconURL(profileURL);
    } catch (error) {
      console.error('Error fetching icon URLs:', error);
    }
  };

  return (
    <div>
      <header>
        <section id="header">
          <Link to="/"><img src={logoIconURL} className="logo" alt="" /></Link>
          <h2><Link to="/home">Atelier</Link></h2>
          <div>
            <ul id="navbar">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/product">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <Link to="/signup"><img src={profileIconURL} className="profile" alt="" /></Link>
        </section>
      </header>

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

export default HeaderFooter;
