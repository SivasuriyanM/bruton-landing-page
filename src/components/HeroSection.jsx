import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Hero_bg from "../assets/video/bg.mp4";
import "../styles/hero.css";

function HeroSection() {
  return (
    <>
      <Box
        id="home"
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          color: "white",
          textAlign: "center",
        }}
      >
        <video className="hero-video" autoPlay loop muted>
          <source src={Hero_bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box
          sx={{
            overflow: "hidden",
            position: "relative",
            zIndex: 1,
            padding: { xs: "20px", sm: "40px", md: "60px" },
          }}
        >
          <Grid
            className="grid"
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "90vh",
              margin: "0",
              color: "white",
              opacity: 1,
            }}
          >
            <Grid item xs={12} md={12}>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typography variant="h3"> BRUTON Technologies</Typography>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <Typography variant="h6">
                  Leading in Software Development and Cybersecurity
                </Typography>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="contained" color="primary" sx={{ mt: 4 }}>
                  Get Started
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default React.memo(HeroSection);
