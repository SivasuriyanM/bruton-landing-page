import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        backgroundColor: "#f0f4ff ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Grid
        container
        style={{ backgroundColor: "#2f65ad", padding: "50px", color: "white" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h3"> BRUTON Technologies</Typography>
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
    </Box>
  );
}

export default React.memo(HeroSection);
