import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { Typography } from "@mui/material";
import Header from '../../Header';
import Footer from '../../Footer';
import './userProfileStyle.css';
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { User as FirebaseUser } from "firebase/auth";

const User: React.FC = () => {
  const currentUser = useAuth().currentUser as FirebaseUser | null;
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async (uid: string) => {
      try {
        const db = getFirestore();
        const userRef = doc(db, "accounts", uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserData(userData);
          console.log(userData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    if (currentUser && currentUser.uid) {
      fetchUserData(currentUser.uid);
    }
  }, [currentUser]);

  return (
    <div>
      <Header isLoggedIn={false} />
      <div className="container">
        <img loading="lazy" srcSet="..." className="user-image" />
        <div className="user-details">
          <div className="user-header">
            {/* Display user's name */}
            <div className="username">{userData?.name}</div>
          </div>
          <div className="user-username">@{userData?.Username}</div>
          <div className="user-stats">
            {/* Display user's followers and following */}
            {userData?.followers} Followers | {userData?.Following} Following
          </div>
          <div className="user-buttons">
            <div className="user-button">Collection</div>
            <div className="user-button">Exhibit</div>
          </div>
          <div className="user-bio">
            {/* Display user's bio */}
            <p>{userData?.Bio}</p>
          </div>
          <div className="user-social-media">
            <a href={userData?.socialMedia?.facebook}>
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href={userData?.socialMedia?.twitter}>
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
            <a href={userData?.socialMedia?.instagram}>
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
          </div>
          <Typography>hi {currentUser?.email}</Typography>
          <div className="user-contact-info">
            {/* Display user's email, phone, and website */}
            <p>Email: {userData?.email}</p>
            <p>Phone: {userData?.number}</p>
            <p>Website: {userData?.Website}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;