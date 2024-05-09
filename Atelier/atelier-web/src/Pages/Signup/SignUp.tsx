import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";
import { getFirestore, addDoc, collection } from "firebase/firestore";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const db = getFirestore();

  const saveDataToFirestore = async () => {
    try {
      const accountCollection = "accounts"; // Use a single collection for all accounts
      const docRef = await addDoc(collection(db, accountCollection), {
        email: email,
        fullName: fullName,
        username: username,
        description: description,
        profilePhoto: profilePhoto,
        coverPhoto: coverPhoto,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  const signUp = async () => {
    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsSignedUp(true);
      setOpenDialog(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    saveDataToFirestore();
  };

  if (isSignedUp) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <Box minHeight={"100vh"} sx={{ backgroundColor: "#E2C1BE" }}>
      <Box m="0 auto" maxWidth="500px" fontFamily={"Poppins"}>
        <Box pt={"40px"}>
          <Typography
            fontWeight={"bold"}
            letterSpacing={"10px"}
            textAlign={"center"}
            fontSize={"40px"}
          >
            ATELIER
          </Typography>
        </Box>
        <Box mt={"70px"}>
          <Typography
            fontFamily={"Poppins"}
            textAlign={"center"}
            color={"#413F3F"}
            fontSize={"30px"}
          >
            Sign Up
          </Typography>
        </Box>
        <Box mt={"30px"}>
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                borderRadius: "12px",
              },
            }}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                borderRadius: "12px",
              },
            }}
          />
          <TextField
            fullWidth
            type="password"
            label="Confirm Password"
            variant="filled"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                borderRadius: "12px",
              },
            }}
          />
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <Box mt="12px" display={"flex"} justifyContent={"center"}>
            <Button
              fullWidth
              size="medium"
              variant="contained"
              sx={{
                backgroundColor: "rgba(91, 160, 187)",
                borderRadius: "12px",
                height: "45px",
                fontFamily: "Montserrat",
                "&:hover": {
                  backgroundColor: "#CF9893",
                },
              }}
              onClick={signUp}
            >
              Create account
            </Button>
          </Box>
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Complete Your Profile</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Full Name"
            variant="filled"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Username"
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Description"
            variant="filled"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={3}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="file"
            label="Profile Photo"
            onChange={(e) => setProfilePhoto(e.target.files[0])}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="file"
            label="Cover Photo"
            onChange={(e) => setCoverPhoto(e.target.files[0])}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Launch Profile</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SignUpPage;
