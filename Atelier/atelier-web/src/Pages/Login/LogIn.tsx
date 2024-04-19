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
import React from "react";
import { Navigate, Link as RouterLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { auth } from "../../../FirebaseConfig";
import {
  doSignInwithEmailandPassword,
  doCreateUserwithEmailandPassword,
} from "../../auth/auth";
import { useAuth } from "../../auth/AuthContext";

function LogInPage() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSigningIn, setIsSigningIn] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInwithEmailandPassword(email, password);
    }
  };

  return (
    <Box
      minHeight={"100vh"}
      fontFamily={"Poppins"}
      sx={{
        backgroundImage: 'url("bg2.jpg")',
        backgroundSize: "cover",
      }}
    >
      {userLoggedIn && <Navigate to={"/home"} replace={true}></Navigate>}
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
