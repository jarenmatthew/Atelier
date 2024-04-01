import React, { useState } from "react";
import { Box, Typography, TextField, Stack, Link, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      minHeight={"100vh"}
      sx={{
        backgroundImage: 'url("bg2.jpg")',
        backgroundSize: "cover",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(39, 39, 39, 0.4)",
        },
      }}
    >
      {/* m = "0 auto" is used to center all the content, this serves as the container */}
      <Box m="0 auto" maxWidth="500px">
        <Box pt="32px">
          <Typography textAlign={"center"} variant="h3">
            Atelier
          </Typography>
        </Box>
        <Box mt="100px">
          <Typography textAlign={"center"} variant="h5">
            Sign Up
          </Typography>
        </Box>
        <Box mt={"32px"}>
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
            Create account
          </Button>
        </Box>
        <Box mt={"40px"}>
          <Typography textAlign={"center"} variant="body1">
            Already have an account?{" "}
            <Link component={RouterLink} to="/Login">
              Log In{" "}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUpPage;
