import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { Typography } from "@mui/material";
import Header from "../../Header";
import Footer from "../../Footer";
import "./userProfileStyle.css";
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
      <Header />
      <div className="container">
        {/* Display user profile information */}
        <div id="profile-banner">
          <div id="profile-cover">
            <img
              src={userData?.coverURL}
              className="cover-photo"
              alt="User cover photo"
            />
          </div>

          <div id="profile-elements">
            <div id="profile-cont">
              <div id="profile-picture">
                <img
                  src={userData?.profileURL}
                  className="profile-photo"
                  alt="User profile photo"
                />
              </div>

              <div id="profile-deets">
                <p id="user-name">{userData?.displayName}</p>
                <p id="user-username">@{userData?.username}</p>
                <p id="user-followers">{userData?.followers} Followers</p>
              </div>
            </div>

            <div id="profile-buttons">
              <button className="user-profile-btns" id="edit-button">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="user-bio">
          {/* Display user's bio */}
          <p>{userData?.bio}</p>
        </div>
        <div className="user-social-media">
          {/* Display user's social media links */}
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
          {/* Display user's contact information */}
          <p>Email: {userData?.email}</p>
          <p>Phone: {userData?.number}</p>
          <p>Website: {userData?.website}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;
