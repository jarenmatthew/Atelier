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
import { Navigate, Link as RouterLink } from "react-router-dom";
import Sidebar from "./components/ChatSidebar";
import MessageBar from "./components/MessageBar";
import Header from "../../Header";

function ChatPage() {
  return (
    <Box height={"100vh"}>
      <Header />
      <Box
        height={"calc(100vh - 100px)"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          height={"95%"}
          width={"96%"}
          justifyContent={"center"}
        >
          <Sidebar />
          <MessageBar />
        </Box>
      </Box>
    </Box>
  );
}

export default ChatPage;
