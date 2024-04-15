// Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../FirebaseConfig';

const Header: React.FC = () => {
  const [logoIconURL, setLogoIconURL] = useState('');
  const [profileIconURL, setProfileIconURL] = useState('');

  useEffect(() => {
    fetchIconURLs(); // Fetch icon URLs
  }, []);

  const fetchIconURLs = async () => {
    try {
      // Fetch icon URLs from Firebase Storage
      const iconsRef = ref(storage, 'icons');
      const logoURL = await getDownloadURL(ref(iconsRef, 'logo.jpg'));
      const profileURL = await getDownloadURL(ref(iconsRef, 'profile.png'));
      
      setLogoIconURL(logoURL);
      setProfileIconURL(profileURL);
    } catch (error) {
      console.error('Error fetching icon URLs:', error);
    }
  };

  return (
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
  );
};

export default Header;
