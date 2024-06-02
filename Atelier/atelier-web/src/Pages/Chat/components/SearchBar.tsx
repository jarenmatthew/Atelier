import {
  Box,
  Typography,
  TextField,

} from "@mui/material";
import React from "react";
import { Navigate, Link as RouterLink } from "react-router-dom";

function SearchBar() {
  return (
    <Box width={"94%"}>
      <TextField
        fullWidth
        label="Search message"
        variant="filled"
        // onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          disableUnderline: true,
          style: {
            backgroundColor: "#FFFFFF",
            borderRadius: "5px",
            marginBottom: "15px",
            fontFamily: "Montserrat",
          },
        }}
      />{" "}
    </Box>
  );
}

export default SearchBar;
