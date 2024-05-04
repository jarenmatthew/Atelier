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
import { doSignInwithEmailandPassword } from "../../auth/auth";
import { useAuth } from "../../auth/AuthContext";

function LogInPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSigningIn, setIsSigningIn] = React.useState(false);

  const { userLoggedIn } = useAuth();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogIn = async (e) => {
    e.preventDefault();
    try {
      if (!isSigningIn) {
        setIsSigningIn(true);
        await doSignInwithEmailandPassword(email, password);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <Box
      minHeight={"100vh"}
      fontFamily={"Inknut Antiqua"}
      sx={{
        backgroundColor: "#E2C1BE",
        // backgroundImage: 'url("bg2.jpg")',
        // backgroundSize: "cover",
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
            fontStyle={"Water Brush"}
            color={"#91488A"}
          >
            ATELIER
          </Typography>
        </Box>
        <Box mt={"70px"}>
          <Typography
            fontFamily={"Inknut Antiqua"}
            textAlign={"center"}
            color={"black"}
            fontSize={"22px"}
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
                  backgroundColor: "#875782",
                  borderRadius: "12px",
                  height: "45px",
                  fontFamily: "Montserrat",
                  "&:hover": {
                    backgroundColor: "#CF9893",},
                }}
                onClick={onLogIn}
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
                <Typography fontFamily={"Montserrat"}>Remember Me</Typography>
              }
              sx={{
                color: "black",
                "& .MuiSvgIcon-root": { fontSize: 21 },
              }}
            />
          </FormGroup>
          <Box pt={"6px"}>
            <Link href="#" sx={{ textDecoration: "underline", color: "black" ,fontFamily: "Montserrat",}}>
              {/* backgroundColor: "#7A5980", */}
              Forgot Password?
            </Link>
          </Box>
        </Box>
        <Box mt={"5px"}>
          <Typography
            fontFamily={"Montserrat"}
            textAlign={"center"}
            variant="body1"
            color={"black"}
            fontSize={"18"}
          >
            Don't have an account?{" "}
            <Link
              component={RouterLink}
              to="/Signup"
              sx={{ textDecoration: "underline", color: "black",fontSize:"18px", fontWeight:"bold" }}
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
