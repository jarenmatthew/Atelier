import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Link,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Navigate, Link as RouterLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getFirestore, addDoc, collection } from "firebase/firestore";

function SignUpPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const db = getFirestore();

  const saveDataToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "accounts"), {
        email: email,
        password: password,
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

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsSignedUp(true);
      await saveDataToFirestore();
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  if (isSignedUp) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <Box
      minHeight={"100vh"}
      sx={{
        backgroundColor: "#E2C1BE",
        // backgroundImage: 'url("bg2.jpg")',
        // backgroundSize: "cover",
      }}
    >
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
          <Stack spacing={3}>
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
              type={showPassword ? "text" : "password"}
              fullWidth
              label="Password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
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
                    backgroundColor: "#CF9893",},
                }}
                onClick={signUp}
              >
                Create account
              </Button>
            </Box>
          </Stack>
        </Box>

        <Box mt={"40px"}>
          <Typography
            fontFamily={"Poppins"}
            textAlign={"center"}
            variant="body1"
            color={"white"}
          >
            Already have an account?{" "}
            <Link
              component={RouterLink}
              to="/login"
              sx={{ textDecoration: "underline", color: "black", fontWeight:"bold"}}
            >
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUpPage;
