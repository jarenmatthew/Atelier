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
  Avatar,
} from "@mui/material";
import React from "react";
import { Navigate, Link as RouterLink } from "react-router-dom";

function SearchBar() {
  return (
    <Box mb={"20px"}>
      <Box display={"flex"} alignItems={"center"}>
        <Avatar src=" assets\avatar1.png" />
        <Box display={"flex"} flexDirection={"column"} pl={"10px"}>
          <Typography
            fontFamily={"Inknut Antiqua"}
            fontWeight={"bold"}
            fontSize={"14px"}
          >
            Jane Doe
          </Typography>
          <Typography
            fontFamily={"Montserrat"}
            fontWeight={"medium"}
            fontSize={"14px"}
          >
            Hello chats!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchBar;
