import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Hero_bg from "../assets/video/Hero_background.mp4";
import "../styles/hero.css";

function HeroSection() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            position: "fixed",
            zIndex: 1,
            padding: { xs: "20px", sm: "40px", md: "60px" },
          }}
        >
          <Grid
            container
            sx={{
              backgroundColor: "#2f65ad",
              padding: "50px",
              color: "white",
              opacity: 0.9,
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
