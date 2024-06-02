import { Box, Typography, TextField, IconButton } from "@mui/material";
import React from "react";
import { Navigate, Link as RouterLink } from "react-router-dom";
import { SendRounded } from "@mui/icons-material";
import Messages from "./Messages";

function MessageBar() {
  return (
    <Box
      flex={2}
      bgcolor={"#875782"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"10px"}
    >
      <Box
        height={"97%"}
        width={"99%"}
        bgcolor={"white"}
        borderRadius={"10px"}
        overflow={"hidden"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box bgcolor={"#D9ADA9"} padding={2} paddingBottom={1}>
          <Typography fontFamily={"Inknut Antiqua"} color={"white"}>
            Jane Doe
          </Typography>
        </Box>

        <Box
          flex={1}
          padding={2}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          overflow={"hidden"}
        >
          <Box flex={1} overflow={"auto"} mb={2} padding={2}>
            <Messages />
            <Messages isOwner />
            <Messages />
            <Messages />
            <Messages isOwner />

            <Messages />
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <TextField
            variant="outlined"
            placeholder="Type your message..."
            fullWidth
            multiline
            rows={1}
            sx={{ marginRight: 1 }}
          />
          <IconButton color="primary">
            <SendRounded />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default MessageBar;
