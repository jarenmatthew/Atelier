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
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import background from "./assets/bg2.jpg";

function LogInPage() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
      sx={{
        background: "rgba(39, 39, 39, 0.4)",
        backgroundImage: "url('./assets/bg2.jpg')",
      }}
    >
      {/* m = "0 auto" is used to center all the content, this serves as the container */}
      <Box m="0 auto" maxWidth="500px">
        <Box mt={"32px"}>
          <Typography textAlign={"center"} variant="h3">
            Atelier
          </Typography>
        </Box>
        <Box mt="100px">
          <Typography textAlign={"center"} variant="h5">
            Welcome!
          </Typography>
        </Box>

        <Box mt={"32px"}>
          <Typography fontSize={"16px"}>
            &nbsp;Sign in to your account.
          </Typography>

          <Stack spacing={2}>
            <TextField
              fullWidth
              id="outlined-basic"
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
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="filled"
              InputProps={{
                disableUnderline: true,

                style: {
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: "12px",
                },
              }}
            />
          </Stack>
        </Box>
        <Box mt="12px" display={"flex"} justifyContent={"center"}>
          <Button
            size="medium"
            variant="contained"
            sx={{ backgroundColor: "rgba(91, 160, 187)" }}
          >
            Login
          </Button>
        </Box>
        <Box mt="12px" display={"flex"} justifyContent={"space-between"}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="default" sx={{ color: "white" }} />}
              label={<Typography fontSize={15}>Remember me</Typography>}
              sx={{
                color: "white",
                "& .MuiSvgIcon-root": { fontSize: 18 },
              }}
            />
          </FormGroup>
          <Link href="#">Forgot Password?</Link>
        </Box>
        <Box>
          <Typography textAlign={"center"} variant="body1">
            Don't have an account?{" "}
            <Link component={RouterLink} to="/Signup">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LogInPage;
