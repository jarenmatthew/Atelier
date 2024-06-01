// UserProfile.jsx

import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Box, Typography, Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';
import './userProfileStyle.css';
import Header from '../../Header';
import Footer from '../../Footer';
import { auth } from "../../../FirebaseConfig"; // Import Firebase authentication

const UserProfile = () => {
  const { docId } = useParams(); // Change userId to docId
  const [userData, setUserData] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the current user's authentication state
        const currentUser = auth.currentUser;
        if (currentUser) {
          // If user is logged in, fetch their profile data based on the document ID
          const docRef = doc(db, 'accounts', docId); // Use docId instead of currentUser.uid
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } else {
          // Handle if user is not logged in
          console.log('User not logged in');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [docId, db]); // Add docId to the dependency array

  if (!userData) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      <Header />
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <Avatar src={userData.profilePhoto} alt={userData.fullName} sx={{ width: 100, height: 100 }} />
        <Typography variant="h5">{userData.fullName}</Typography>
        <Typography variant="body1">@{userData.username}</Typography>
        <Typography variant="body2">{userData.description}</Typography>
        {userData.coverPhoto && <img src={userData.coverPhoto} alt="Cover" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />}
      </Box>

      <Footer />
    </div>
  );
};

export default UserProfile;
