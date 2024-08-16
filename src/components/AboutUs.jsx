import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

function AboutUs() {
  return (
    <Box
      id="about"
      sx={{
        height: "100vh",
        backgroundColor: "#f0f4ff ",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        margin: "5px 0",
      }}
    >
      <Card style={{ marginTop: "30px" }}>
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
    </Box>
  );
}

export default React.memo(AboutUs);
