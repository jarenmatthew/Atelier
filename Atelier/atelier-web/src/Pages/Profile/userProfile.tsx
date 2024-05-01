import React from 'react';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
import { storage } from '../../../FirebaseConfig';
import './shopStyle.css';
import Header from '../../Header';
import Footer from '../../Footer';

const User: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="div">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="img"
                />
                <div className="div-2">
                    <div className="div-3">
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="img-2"
                        />
                        <div className="div-4">About</div>
                    </div>
                    <div className="div-5">
                        <div className="div-6">
                            <div className="div-7">Your Name</div>
                            <div className="div-8">Edit Profile</div>
                        </div>
                        <div className="div-9">@yourusername</div>
                        <div className="div-10">20 Followers | 41 Following</div>
                        <div className="div-11">
                            <div className="div-12">Collection</div>
                            <div className="div-13">Exhibit</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default User;
