import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

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
    <Grid id="services" container spacing={3} style={{ marginTop: "30px" }}>
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
  );
}

export default React.memo(Services);
