import { Box } from "@mui/material";
import React from "react";

const LoginImg = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="images/toilet_login.png"
        alt="toilet_login"
        style={{
          width: "600px",
        }}
      />
    </Box>
  );
};

export default LoginImg;
