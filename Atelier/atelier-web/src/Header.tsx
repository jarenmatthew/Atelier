import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../FirebaseConfig';
import './HeaderStyle.css';

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const [logoIconURL, setLogoIconURL] = useState('');
  const [profileIconURL, setProfileIconURL] = useState('');
  const [notifURL, setNotifIconURL] = useState('');
  const [messageURL, setMessageIconURL] = useState('');
  const [cartURL, setCartIconURL] = useState('');

  useEffect(() => {
    fetchIconURLs(); // Fetch icon URLs
  }, []);

  const fetchIconURLs = async () => {
    try {
      // Fetch icon URLs from Firebase Storage
      const iconsRef = ref(storage, 'icons');
      const logoURL = await getDownloadURL(ref(iconsRef, 'atelier-logo.png'));
      const profileURL = await getDownloadURL(ref(iconsRef, 'hanako.jpg'));
      const cartURL = await getDownloadURL(ref(iconsRef, 'cart-icon.png'));
      const messageURL = await getDownloadURL(ref(iconsRef, 'message-icon.png'));
      const notifURL = await getDownloadURL(ref(iconsRef, 'notif-icon.png'));
      
      setLogoIconURL(logoURL);
      setProfileIconURL(profileURL);
      setCartIconURL(cartURL);
      setMessageIconURL(messageURL);
      setNotifIconURL(notifURL);
    } catch (error) {
      console.error('Error fetching icon URLs:', error);
    }
  };

  const handleProfileClick = () => {
    // Redirect to user profile page if logged in
    if (!isLoggedIn) {
      window.location.href = '/User'; // Or use React Router's <Link> component
    } else {
      window.location.href = '/LogIn';
    }
  };

  return (
    <header>
      <section id="header">

        <div id='atelier-brand'>
          <div>
            <Link to="/home"><img src={logoIconURL} className="logo" alt="Atelier Logo" /></Link>
          </div>
        </div>

        <div id='navi'>
            <ul id="navbar">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
        </div>

        <div id='header-icons'>
          <div id='icons-box'>
            <div></div>
            <div><Link to="/cart"><img src={cartURL} className="icons" alt="My Cart" /></Link></div>
            <div className="cart-count">0</div>
            <div><Link to="/"><img src={messageURL} className="icons" alt="Profile Circle" /></Link></div>
            <div><Link to="/"><img src={notifURL} className="icons" alt="Profile Circle" /></Link></div>
          </div>
          
          <div id='profile-box'>
              <img src={profileIconURL} className="profile" alt="Profile Circle" onClick={handleProfileClick} />
          </div>
        </div>
        
      </section>
    </header>
  );
};

export default Header;
