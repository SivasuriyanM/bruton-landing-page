import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

function AboutUs() {
  return (
    <Card id="about" style={{ marginTop: "30px" }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          About BRUTON Technologies
        </Typography>
        <Typography variant="body1">
          At BRUTON Technologies, our mission is to deliver top-notch software
          solutions and cybersecurity services that empower businesses to
          succeed in the digital world.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default React.memo(AboutUs);
