import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import "../styles/testimonials.css";
import Divider from "@mui/material/Divider";
import test from "../assets/video/Hero_background.mp4";

const testimonialsData = [
  {
    name: "Alice Brown",
    feedback: "BRUTON Technologies provided excellent service and support.",
  },
  {
    name: "David Miller",
    feedback: "Highly recommend their software solutions!",
  },
  {
    name: "Sarah Connor",
    feedback: "Their cybersecurity services are top-notch.",
  },
];

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonialsData.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        id="testimonials"
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <video className="hero-video" autoPlay loop muted>
          <source src={test} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" gutterBottom>
            What Our Clients Say
            <Divider component="li" sx={{ width: "100%", listStyle: "none" }} />
          </Typography>
        </motion.div>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8}>
            <Card className="testimonials">
              <CardContent>
                <Typography variant="h6">
                  "{testimonialsData[currentTestimonial].feedback}"
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: "10px", fontStyle: "italic" }}
                >
                  - {testimonialsData[currentTestimonial].name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
          {testimonialsData.map((_, index) => (
            <Button
              key={index}
              variant={currentTestimonial === index ? "contained" : "outlined"}
              color="primary"
              style={{ margin: "0 5px" }}
              onClick={() => setCurrentTestimonial(index)}
            >
              {index + 1}
            </Button>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default React.memo(Testimonials);
