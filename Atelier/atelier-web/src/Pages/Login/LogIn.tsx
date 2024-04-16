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
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import { Visibility, VisibilityOff } from "@mui/icons-material";

function LogInPage() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    // Handle sign up logic
    console.log("Signing up...");
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
      {/* m = "0 auto" is used to center all the content, this serves as the container */}
      <Box m="0 auto" maxWidth="500px">
        <Box pt={"50px"}>
          <Typography letterSpacing={"10px"} textAlign={"center"} variant="h3">
            ATELIER
          </Typography>
        </Box>
        {/* <Box mt="100px">
          <Typography textAlign={"center"} variant="h5">
            Welcome!
          </Typography>
        </Box> */}

        <Box mt={"90px"}>
          <Box m={"5px"}>
            <Typography color={"white"} fontSize={"16px"}>
              Login
            </Typography>
          </Box>

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
                }}
              >
                Login
              </Button>
            </Box>
          </Stack>
        </Box>

        <Box mt="12px" display={"flex"} justifyContent={"space-between"}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="default" sx={{ color: "white" }} />}
              // label={<Typography fontSize={16}>Remember me</Typography>}
              label="Remember Me"
              sx={{
                color: "white",
                // "& .MuiSvgIcon-root": { fontSize: 20 },
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
          <Typography textAlign={"center"} variant="body1" color={"white"}>
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
