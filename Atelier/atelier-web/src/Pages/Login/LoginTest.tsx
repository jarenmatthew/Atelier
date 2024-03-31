import {
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import background from "./bg2.jpg";

function LoginTest() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(39, 39, 39, 0.4)",
  };

  return (
    <Box sx={backgroundStyle} fontFamily={"Poppins"}>
      <Box position={"relative"} textAlign="center" overflow={"hidden"}>
        <Typography fontSize={40} marginBottom={10} mt={7}>
          Atelier
        </Typography>
        <Typography fontSize={25} sx={{ color: "rgb(65, 63, 63)" }} mb={4}>
          Login
        </Typography>

        <Box
          width={500}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <TextField
            label="Username or Email"
            variant="filled"
            InputProps={{
              disableUnderline: true,

              style: {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                width: "450px",
              },
            }}
          ></TextField>
          <TextField
            margin="dense"
            label="Password"
            variant="filled"
            InputProps={{
              disableUnderline: true,

              style: {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                width: "450px",
              },
            }}
          ></TextField>
          <Box margin="5px">
            <Button
              size="medium"
              variant="contained"
              sx={{ backgroundColor: "rgba(91, 160, 187,1)" }}
              onClick={() => console.log("Logging in...")}
            >
              Log In
            </Button>
          </Box>
          <Box display={"flex"} flexDirection={"row"}>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginTest;
