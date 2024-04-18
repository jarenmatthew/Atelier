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
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <Box
      minHeight={"100vh"}
      sx={{
        backgroundImage: 'url("bg2.jpg")',
        backgroundSize: "cover",
      }}
    >
      {/* m = "0 auto" is used to center all the content, this serves as the container */}
      <Box m="0 auto" maxWidth="500px" fontFamily={"Poppins"}>
        <Box pt={"50px"}>
          <Typography
            fontWeight={"bold"}
            letterSpacing={"10px"}
            textAlign={"center"}
            fontSize={"40px"}
          >
            ATELIER
          </Typography>
        </Box>
        <Box mt={"80px"}>
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
              sx={{ textDecoration: "none", color: "primary" }}
            >
              Log in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUpPage;
