import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
import { storage } from '../../../FirebaseConfig';
import './artistProfileStyle.css';
import Header from '../../Header';
import Footer from '../../Footer';

const Artist: React.FC = () => {
    const [coverURL, setLogoIconURL] = useState('');

    useEffect(() => {
        fetchIconURLs(); // Fetch icon URLs
    }, []);

    const fetchIconURLs = async () => {
        try {
          // Fetch icon URLs from Firebase Storage
          const iconsRef = ref(storage, 'img');
          const coverURL = await getDownloadURL(ref(iconsRef, 'cover2.png'));
          
          
          setLogoIconURL(coverURL);
          
        } catch (error) {
          console.error('Error fetching icon URLs:', error);
        }
    };
    
    return (
        <div>
            <Header />
            
            <div id='profile-banner'>

                <div id='profile-cover'>
                <img src={coverURL} className="cover-photo" alt="Artist cover photo" />
                </div>

                <div id='profile-elements'>

                    <div id='profile-cont'>
                        <div id='profile-picture'>
                        <img src={coverURL} className="profile-photo" alt="Artist profile photo" />
                        </div>

                        <div id='profile-deets'>
                            <p>Artist Name</p>
                            <p>@username</p>
                            <p>21 Followers</p>

                        </div>

                    </div>

                    <div id='profile-buttons'>

                    </div>
                </div>

            </div>


            <Footer />
        </div>
    );
};

export default Artist;
