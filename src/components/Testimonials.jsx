import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent, Grid, Button } from "@mui/material";

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
    <div style={{ marginTop: "30px" }}>
      <Typography variant="h4" gutterBottom>
        What Our Clients Say
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card>
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
    </div>
  );
}

export default React.memo(Testimonials);
