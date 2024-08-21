import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import work from "../assets/images/Working.jpg";
import logo from "../assets/images/download.png";
import { Image } from "mui-image";

import "../styles/about.css";

function AboutUs() {
  return (
    <Box
      className="about-container"
      sx={{
        width: "100%",
        height: "auto",
        flexDirection: "column",
        textAlign: "start",
        padding: { xs: "20px", sm: "40px", md: "60px" },
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={2}
          md={2}
          sm={2}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItem: "flex-start",
          }}
        >
          <Image
            style={{ width: "80px", height: "80px", top: "-80px" }}
            src={logo}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={6} className="about-content">
          <Typography variant="h4" sx={{ mb: 2 }}>
            About US
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>
            At BRUTON Technologies, we pride ourselves on being a trailblazer in
            the world of software development and digital transformation. Our
            mission is to deliver intelligent, scalable, and user-centric
            technology solutions.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="about-content2">
          <Image
            src={work}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default React.memo(AboutUs);
