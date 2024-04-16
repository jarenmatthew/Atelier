import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
import { storage } from '../../../FirebaseConfig';
import './aboutStyle.css';
import Header from '../../Header';

const About: React.FC = () => {
    return (

        <div>
            <Header />
            <h2>About Us</h2>
            <h4>we create a safe space for art</h4>
        </div>

    );
  };
  

export default About;
