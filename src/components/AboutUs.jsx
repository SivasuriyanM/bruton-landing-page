import React from "react";
import {
  Box,
  Typography,
  Grid,
  // List,
  // ListItem,
  // ListItemButton,
  // ListItemIcon,
  // ListItemText,
} from "@mui/material";
// import work from "../assets/images/Working.jpg";
import logo from "../assets/images/download.png";
import { Image } from "mui-image";
// import StarIcon from "@mui/icons-material/Star";
import "../styles/about.css";

function AboutUs() {
  return (
    <Box
      id="about"
      className="about-container"
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        textAlign: "start",
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
          className="about-content0 grid"
        >
          <Image
            style={{ width: "8vw", height: "8vw", top: "-80px" }}
            src={logo}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={6} className="about-content grid">
          <Typography variant="h4">About US</Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>
            At BRUTON Technologies, we pride ourselves on being a trailblazer in
            the world of software development and digital transformation. Our
            mission is to deliver intelligent, scalable, and user-centric
            technology solutions.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          className="about-content2 grid"
          sx={{ textAlign: "center" }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            " Success is the sum of small efforts - repeated day in and day out.
            "
          </Typography>
          <Typography variant="h6">- Robert Collier</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default React.memo(AboutUs);
