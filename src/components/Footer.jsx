import React from "react";
import { Typography, Link, Container } from "@mui/material";

function Footer() {
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: "50px",
        padding: "20px",
        backgroundColor: "#2f65ad",
        color: "white",
      }}
    >
      <Typography variant="body1">© 2024 BRUTON Technologies</Typography>
      <Link href="#" style={{ color: "white" }}>
        Privacy Policy
      </Link>
    </Container>
  );
}

export default React.memo(Footer);
