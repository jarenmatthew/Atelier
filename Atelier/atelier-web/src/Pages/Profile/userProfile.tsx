import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { Typography } from "@mui/material";
import Header from "../../Header";
import Footer from "../../Footer";
import "./userProfileStyle.css";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { User as FirebaseUser } from "firebase/auth";
import { redirect } from "react-router-dom";

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
              src={userData?.coverPhoto}
              className="cover-photo"
              alt="User cover photo"
            />
          </div>

          <div id="profile-elements">
            <div id="profile-cont">
              <div id="profile-picture">
                <img
                  src={userData?.profilePhoto}
                  className="profile-photo"
                  alt="User profile photo"
                />
              </div>

              <div id="profile-deets">
                <p id="user-name">{userData?.fullName}</p>
                <p id="user-username">@{userData?.username}</p>
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
          <p>{userData?.description}</p>
        </div>

        <Typography>hi {currentUser?.email}</Typography>

        <div className="user-contact-info">
          {/* Display user's contact information */}
          <p>Email: {userData?.email}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;
