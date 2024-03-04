import { useState } from "react";

import SignUpForm from "./SignupForm";
import { Box, Button } from "@mui/material";

function SignUpPage() {
  return (
    <Box>
      <h2>Atelier</h2>
      <h3>Welcome Back!</h3>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <SignUpForm />
      </Box>
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUpPage;
