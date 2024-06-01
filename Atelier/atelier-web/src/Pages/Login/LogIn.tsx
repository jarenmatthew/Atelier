import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, Checkbox, FormGroup, FormControlLabel, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Navigate, Link as RouterLink } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../FirebaseConfig';
import { User } from '../userProfile';

function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" replace={true} />;
    
  }

  return (
    <Box minHeight="100vh" sx={{ backgroundColor: "#E2C1BE" }}>
      <Box m="0 auto" maxWidth="500px">
        <Box m="0 auto" pt="80px" width="280px">
          <img src="/src/assets/atelier-logo2.png" alt="Atelier" width="100%" />
        </Box>
        <Box mt="15%">
          <Typography fontFamily="Inknut Antiqua" textAlign="center" color="#232335" fontSize="175%" fontWeight="700">
            Login
          </Typography>
        </Box>
        <Box mt="10%">
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
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {error && <Typography variant="body2" color="error">{error}</Typography>}
          <Box mt="15%" display="flex" justifyContent="center">
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
                "&:hover": { backgroundColor: "#3B3B58", fontWeight: "600" },
              }}
              onClick={logIn}
            >
              Log in
            </Button>
          </Box>
        </Box>
        <Box mt="3%" display="flex" justifyContent="space-between">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="default" sx={{ color: "#232335" }} />}
              label={
                <Typography fontFamily="Montserrat" textAlign="center" color="#232335" fontSize="18px" fontWeight="400">
                  Remember Me
                </Typography>
              }
              sx={{ color: "#232335", "& .MuiSvgIcon-root": { fontSize: 18 } }}
            />
          </FormGroup>
          <Box>
            <Link href="#" sx={{ textDecoration: "underline", fontFamily: "Montserrat", color: "#232335" }}>
              Forgot Password?
            </Link>
          </Box>
        </Box>
        <Box mt="5px">
          <Typography fontFamily="Montserrat" textAlign="center" color="#232335" fontSize="18px" fontWeight="400">
            Don't have an account?{" "}
            <Link component={RouterLink} to="/SignUp" sx={{ textDecoration: "underline", fontWeight: "700", color: "#232335" }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LogInPage;
