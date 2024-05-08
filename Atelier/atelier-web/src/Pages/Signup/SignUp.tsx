import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Link,
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { Navigate, Link as RouterLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [role, setRole] = useState("user"); // Default role is set to "user"
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [coverPhoto, setCoverPhoto] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const db = getFirestore();

  const saveDataToFirestore = async () => {
    try {
      const accountCollection = "accounts"; // Use a single collection for all accounts
      const docRef = await addDoc(collection(db, accountCollection), {
        email: email,
        password: password,
        username: username,
        displayName: displayName,
        role: role,
        followersCount: followersCount,
        followingCount: followingCount,
        coverPhoto: coverPhoto,
        profilePhoto: profilePhoto,
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
      // Check if the username is already taken in the appropriate collection based on the selected role
      const usernameQuery = query(
        collection(db, "accounts"),
        where("username", "==", username),
        where("role", "==", role) // Check for username availability in the appropriate collection
      );
      const usernameSnapshot = await getDocs(usernameQuery);
      if (!usernameSnapshot.empty) {
        setUsernameError("Username is already taken.");
        return;
      }
  
      await createUserWithEmailAndPassword(auth, email, password);
      setIsSignedUp(true);
      await saveDataToFirestore();
      setEmail("");
      setPassword("");
      setUsername("");
      setDisplayName("");
      setConfirmPassword("");
      setFollowersCount(0);
      setFollowingCount(0);
      setCoverPhoto("");
      setProfilePhoto("");
    } catch (err) {
      console.log(err);
    }
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
              fullWidth
              label="Username"
              variant="filled"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={usernameError ? true : false}
              helperText={usernameError}
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
              label="Display Name"
              variant="filled"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
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
            <TextField
              type={showConfirmPassword ? "text" : "password"}
              fullWidth
              label="Confirm Password"
              variant="filled"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
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

            <FormControl component="fieldset">
              <RadioGroup
                aria-label="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                />
                <FormControlLabel
                  value="artist"
                  control={<Radio />}
                  label="Artist"
                />
              </RadioGroup>
            </FormControl>

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
              sx={{ textDecoration: "underline", color: "black", fontWeight: "bold" }}
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
