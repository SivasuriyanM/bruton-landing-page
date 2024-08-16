import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          BRUTON Technologies
        </Typography>
        <Button color="inherit" href="#hero">
          Home
        </Button>
        <Button color="inherit" href="#about">
          About Us
        </Button>
        <Button color="inherit" href="#services">
          Services
        </Button>
        <Button color="inherit" href="#team">
          Team
        </Button>
        <Button color="inherit" href="#contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(Navbar);
