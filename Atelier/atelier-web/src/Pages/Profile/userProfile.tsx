import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
import { storage, db } from '../../../FirebaseConfig';
import './userProfileStyle.css';
import Header from '../../Header';
import Footer from '../../Footer';
import './userProfileStyle.css';

const User: React.FC = () => {
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        // Fetch user data from Firestore collection
        const fetchUserData = async () => {
            try {
                const userRef = db.collection('users').doc('user_id'); // Replace 'user_id' with actual user ID
                const userDoc = await userRef.get();
                if (userDoc.exists) {
                    setUserData(userDoc.data());
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="user-image"
                />
                <div className="user-details">
                    <div className="user-header">
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="avatar"
                        />
                        <div className="username">{userData?.displayName}</div>
                    </div>
                    <div className="user-username">@{userData?.username}</div>
                    <div className="user-stats">{userData?.followers} Followers | {userData?.following} Following</div>
                    <div className="user-buttons">
                        <div className="user-button">Collection</div>
                        <div className="user-button">Exhibit</div>
                    </div>
                    <div className="user-bio">
                        <p>{userData?.bio}</p>
                    </div>
                    <div className="user-social-media">
                        <a href={userData?.socialMedia?.facebook}><img src="facebook-icon.png" alt="Facebook" /></a>
                        <a href={userData?.socialMedia?.twitter}><img src="twitter-icon.png" alt="Twitter" /></a>
                        <a href={userData?.socialMedia?.instagram}><img src="instagram-icon.png" alt="Instagram" /></a>
                    </div>
                    <div className="user-contact-info">
                        <p>Email: {userData?.email}</p>
                        <p>Phone: {userData?.phone}</p>
                        <p>Website: {userData?.website}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default User;
