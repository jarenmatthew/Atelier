import { Box, Typography, Avatar } from "@mui/material";
import React from "react";
import { Navigate, Link as RouterLink } from "react-router-dom";

interface MessageProps {
  readonly isOwner?: boolean;
}

function Messages({ isOwner = false }: MessageProps) {
  return (
    <Box mb={"20px"} paddingBottom={"4px"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"20px"}
        flexDirection={isOwner ? "row-reverse" : "row"}
      >
        <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
          <Avatar src=" assets\avatar1.png" />
          <Typography fontSize={"12px"}>Just now</Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} color={"black"}>
          <Typography
            sx={{
              bgcolor: isOwner ? "#D9ADA9" : "#C0D0FF",
              padding: "10px 20px",
              borderRadius: isOwner
                ? "10px 0px 10px 10px"
                : "0px 10px 10px 10px",
              maxWidth: "max-content",
            }}
          >
            Hello chat!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Messages;
