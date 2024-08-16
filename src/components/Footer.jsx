import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} BRUTON Technologies. All Rights Reserved.
      </Typography>
      <Link href="#" color="inherit" sx={{ mx: 1 }}>
        Privacy Policy
      </Link>
      <Link href="#" color="inherit" sx={{ mx: 1 }}>
        Terms of Service
      </Link>
    </Box>
  );
}

export default React.memo(Footer);
