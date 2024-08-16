import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

function Services() {
  const services = [
    { name: "Web Development", description: "High-quality web solutions." },
    {
      name: "Software Solutions",
      description: "Custom software for all needs.",
    },
    { name: "Cybersecurity", description: "Keeping your data secure." },
  ];

  return (
    <Box
      id="services"
      sx={{
        height: "100vh",
        backgroundColor: "#f0f4ff ",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Grid container spacing={3} style={{ marginTop: "30px" }}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{service.name}</Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default React.memo(Services);
