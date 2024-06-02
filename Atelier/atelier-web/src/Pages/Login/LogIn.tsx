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
import { signInWithEmailAndPassword } from "firebase/auth";

function LogInPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [IsLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      setError(null);
    } catch (err) {
      if (err.message.includes("auth/invalid-email")) {
        setError("Your email or password is incorrect. Please try again.");
      } else if (err.message.includes("auth/invalid-credential")) {
        setError("Your email or password is incorrect. Please try again.");
      } else {
        setError(err.message);
      }
    }
  };
  if (IsLoggedIn) {
    return <Navigate to="/home" replace={false} />;
  }

  return (
    <Box minHeight={"100vh"} sx={{ backgroundColor: "#E2C1BE" }}>
      {/* m = "0 auto" is used to center all the content, this serves as the container */}
      <Box m="0 auto" maxWidth="500px">
        <Box m="0 auto" pt={"30px"} width={"280px"}>
          <img
            src="/src/assets/atelier-logo2.png"
            alt="Atelier"
            width={"100%"}
          />
        </Box>

        <Box mt={"10%"}>
          <Typography
            fontFamily={"Inknut Antiqua"}
            textAlign={"center"}
            color={"#232335"}
            fontSize={"175%"}
            fontWeight={"700"}
          >
            Login
          </Typography>
        </Box>

        <Box mt={"10%"}>
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: "#FFFFFF",
                borderRadius: "5px",
                marginBottom: "15px",
                fontFamily: "Montserrat",
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
              disableUnderline: true,
              style: {
                backgroundColor: "#FFFFFF",
                borderRadius: "5px",
                marginBottom: "15px",
                fontFamily: "Montserrat",
              },
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
            }}
          />
          {error && (
            <Typography variant="body2" color="error" gutterBottom>
              {error}
            </Typography>
          )}

          <Box mt="3%" display={"flex"} justifyContent={"center"}>
            <Button
              fullWidth
              size="medium"
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#91488A",
                borderRadius: "5px",
                height: "50px",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "#3B3B58",
                  fontWeight: "600",
                },
              }}
              onClick={logIn}
            >
              Log in
            </Button>
          </Box>
        </Box>

        <Box mt={"3%"} display={"flex"} justifyContent={"space-between"}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="default" sx={{ color: "#232335" }} />}
              label={
                <Typography
                  fontFamily={"Montserrat"}
                  textAlign={"center"}
                  color={"#232335"}
                  fontSize={"18px"}
                  fontWeight={"400"}
                >
                  Remember Me
                </Typography>
              }
              sx={{ color: "#232335", "& .MuiSvgIcon-root": { fontSize: 18 } }}
            />
          </FormGroup>

          <Box>
            <Link
              href="#"
              sx={{
                textDecoration: "underline",
                fontFamily: "Montserrat",
                color: "#232335",
              }}
            >
              {/* backgroundColor: "#7A5980", */}
              Forgot Password?
            </Link>
          </Box>
        </Box>

        <Box mt={"5px"}>
          <Typography
            fontFamily={"Montserrat"}
            textAlign={"center"}
            color={"#232335"}
            fontSize={"18px"}
            fontWeight={"400"}
            sx={{
              marginTop: "10px",
            }}
          >
            Don't have an account?{" "}
            <Link
              component={RouterLink}
              to="/SignUp"
              sx={{
                textDecoration: "underline",
                fontWeight: "700",
                color: "#232335",
              }}
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
