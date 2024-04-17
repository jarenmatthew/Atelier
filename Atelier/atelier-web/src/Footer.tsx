// Footer.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../FirebaseConfig';
import './FooterStyle.css';

const Footer: React.FC = () => {
  const [twitterIconURL, setTwitterIconURL] = useState('');
  const [facebookIconURL, setFacebookIconURL] = useState('');
  const [messengerIconURL, setMessengerIconURL] = useState('');
  const [instagramIconURL, setInstagramIconURL] = useState('');

  useEffect(() => {
    fetchIconURLs(); // Fetch icon URLs
  }, []);

  const fetchIconURLs = async () => {
    try {
      // Fetch icon URLs from Firebase Storage
      const iconsRef = ref(storage, 'icons');
      const twitterURL = await getDownloadURL(ref(iconsRef, 'twitter.png'));
      const facebookURL = await getDownloadURL(ref(iconsRef, 'facebook.png'));
      const messengerURL = await getDownloadURL(ref(iconsRef, 'messenger.png'));
      const instagramURL = await getDownloadURL(ref(iconsRef, 'instagram.png'));
      
      setTwitterIconURL(twitterURL);
      setFacebookIconURL(facebookURL);
      setMessengerIconURL(messengerURL);
      setInstagramIconURL(instagramURL);
    } catch (error) {
      console.error('Error fetching icon URLs:', error);
    }
  };

  return (
    <div>
    <footer id="footer">
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
    </footer>
    <div className="copyright">
        <h3>Copyright 2024</h3>
      </div>
    </div>
  );
};

export default Footer;
