import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import NavigationBar from "../../NavBar";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box display={"flex"} flexDirection={"column"} width={"450px"}>
      <Typography>Hello</Typography>

      <Box m="8px 0px 8px">
        <TextField
          variant="standard"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Box>
      <TextField
        variant="outlined"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="filled"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Box>
  );
};
export default SignUpForm;