import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Link,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Navigate, Link as RouterLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { auth } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const logIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const db = getFirestore();
      // Retrieve user data document from Firestore
      const userDocRef = doc(db, "users", user.uid); // Adjust collection name if necessary
      const userDocSnapshot = await getDoc(userDocRef);
      
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const role = userData.role;

        // Redirect based on the role
        if (role === "artist") {
          return <Navigate to="/Profile" replace={false} />;
        } else {
          return <Navigate to="/user" replace={false} />;
        }
      } else {
        console.log("User data not found");
      }

      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" replace={false} />;
  }

  return (
    <Box
      minHeight={"100vh"}
      fontFamily={"Poppins"}
      sx={{
        backgroundImage: 'url("bg2.jpg")',
        backgroundSize: "cover",
      }}
    >
      {/* m = "0 auto" is used to center all the content, this serves as the container */}
      <Box m="0 auto" maxWidth="500px">
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
            Login
          </Typography>
        </Box>
        <Box mt={"30px"}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Email"
              variant="filled"
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
            <Box mt="12px" display={"flex"} justifyContent={"center"}>
              <Button
                fullWidth
                size="medium"
                variant="contained"
                sx={{
                  backgroundColor: "rgba(91, 160, 187)",
                  borderRadius: "12px",
                  height: "45px",
                  fontFamily: "Poppins",
                }}
                onClick={logIn}
              >
                Log in
              </Button>
            </Box>
          </Stack>
        </Box>

        <Box mt="12px" display={"flex"} justifyContent={"space-between"}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="default" sx={{ color: "white" }} />}
              label={
                <Typography fontFamily={"Poppins"}>Remember Me</Typography>
              }
              sx={{
                color: "white",
                "& .MuiSvgIcon-root": { fontSize: 21 },
              }}
            />
          </FormGroup>
          <Box pt={"6px"}>
            <Link href="#" sx={{ textDecoration: "none", color: "secondary" }}>
              {/* backgroundColor: "#7A5980", */}
              Forgot Password?
            </Link>
          </Box>
        </Box>
        <Box mt={"5px"}>
          <Typography
            fontFamily={"Poppins"}
            textAlign={"center"}
            variant="body1"
            color={"white"}
          >
            Don't have an account?{" "}
            <Link
              component={RouterLink}
              to="/Signup"
              sx={{ textDecoration: "none", color: "primary" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LogInPage;
