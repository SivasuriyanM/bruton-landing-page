import React from "react";
import { Typography, Button, Grid } from "@mui/material";

function HeroSection() {
  return (
    <Grid
      id="hero"
      container
      style={{ backgroundColor: "#2f65ad", padding: "50px", color: "white" }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h2">Welcome to BRUTON Technologies</Typography>
        <Typography variant="h6">
          Leading in Software Development and Cybersecurity
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: "20px" }}
        >
          Learn More
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          href="#contact"
          style={{ marginLeft: "20px", marginTop: "20px" }}
        >
          Contact Us
        </Button>
      </Grid>
    </Grid>
  );
}

export default React.memo(HeroSection);
