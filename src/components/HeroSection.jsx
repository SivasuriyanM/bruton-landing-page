import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";

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
  );
}

export default React.memo(HeroSection);
