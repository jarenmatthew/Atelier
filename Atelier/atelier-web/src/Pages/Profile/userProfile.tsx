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
      <Header isLoggedIn={true} />
      <div className="container">
        <img loading="lazy" srcSet="..." className="user-image" />
        <div className="user-details">
          <div className="user-header">
            {/* Display user's name */}
            <div className="username">{userData?.name}</div>
          </div>
          <div className="user-username">@{userData?.username}</div>
          <div className="user-stats">
            {/* Display user's followers and following */}
            {userData?.followers} Followers | {userData?.following} Following
          </div>
          <div className="user-bio">
            {/* Display user's bio */}
            <p>{userData?.bio}</p>
          </div>
          {/* Additional fields can be displayed similarly */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;
