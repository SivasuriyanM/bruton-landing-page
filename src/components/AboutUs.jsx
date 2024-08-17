import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Card style={{ marginTop: "30px" }}>
          <CardContent>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                About BRUTON Technologies
              </Typography>
            </motion.div>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Typography variant="body1" sx={{ mb: 2 }}>
                At BRUTON Technologies, we pride ourselves on being a
                trailblazer in the world of software development and digital
                transformation. Our mission is to deliver intelligent, scalable,
                and user-centric technology solutions.
              </Typography>

              <Typography variant="h6" sx={{ mb: 2 }}>
                Expertise
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                We specialize in designing, developing, and deploying custom
                software solutions tailored to different industries.
              </Typography>
              <Typography variant="body2">
                Our mission is to innovate and excel, meeting our clients'
                evolving needs.
              </Typography>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

export default React.memo(AboutUs);
