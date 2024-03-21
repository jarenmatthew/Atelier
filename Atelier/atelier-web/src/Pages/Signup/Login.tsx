import { Box, Button, TextField } from "@mui/material";
import React from "react";
import "./signup_style.css";

function LogInPage() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    // Handle sign up logic
    console.log("Signing up...");
  };

  return (
    <Box>
      <h1>ATELIER</h1>
      <div className="wrapper">
        <div className="form-box">
          <div className="login-container" id="login">
            <div className="top">
              <header>Login</header>
            </div>
            <Box>
              <TextField
                type="text"
                className="input-field"
                placeholder="Username or Email"
                value={username}
                onChange={handleUsernameChange}
              />
            </Box>
            <Box marginTop="10px">
              <TextField
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Box>
            <Box marginTop="16px" justifyContent={"center"} display={"flex"}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSignUp}
              >
                Sign In
              </Button>
            </Box>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check"> Remember Me</label>
              </div>
              <div className="two">
                <label>
                  <a href="#">Forgot password?</a>
                </label>
              </div>
            </div>
            <div className="top">
              <span>
                Don't have an account? <a href="#">Sign Up</a>
              </span>
            </div>
          </div>

          <div className="register-container" id="register">
            <div className="top">
              <header>Sign Up</header>
            </div>

            <div className="input-box">
              <TextField
                type="text"
                className="input-field"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="input-box">
              <TextField
                type="text"
                className="input-field"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="input-box">
              <TextField
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="input-box">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSignUp}
              >
                Register
              </Button>
            </div>

            <div className="top">
              <span>
                Have an account? <a href="#">Login</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default LogInPage;
