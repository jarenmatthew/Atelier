import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import NavigationBar from "../../NavBar";
import './signup_style.css';

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/Signup');
  }, [navigate]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container">
      <Box display={"flex"} flexDirection={"column"} width={"450px"} className="signup-form">
        <header>Sign Up</header>

        <form onSubmit={handleSubmit}>
          <Box m="8px 0px 8px">
            <TextField
              className="input-field"
              variant="standard"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <TextField
            className="input-field"
            variant="outlined"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="input-field"
            variant="filled"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit">Sign Up</button>
        </form>
      </Box>
    </div>
  );
};
export default SignUpForm;
