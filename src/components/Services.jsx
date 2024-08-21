import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  CardMedia,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { motion } from "framer-motion";
import "../styles/service.css";
import logo0 from "../assets/images/entsol.gif";
import logo1 from "../assets/images/hacker.gif";
import logo2 from "../assets/images/laptop.gif";
import logo3 from "../assets/images/responsive.gif";
import logo4 from "../assets/images/secure.gif";
import logo5 from "../assets/images/update.gif";

function Services() {
  const services = [
    {
      name: "Custom Software Development",
      description:
        "We craft bespoke software solutions tailored to the unique challenges and needs of your business, ensuring high performance, scalability, and security.",
      key_features: [
        "Custom-built applications",
        "High-performance software",
        "Scalable architecture",
        "Robust security protocols",
      ],
      image: logo2,
    },
    {
      name: "Web and Mobile Development",
      description:
        "From responsive websites to feature-rich mobile applications, we develop digital experiences that engage users and drive results.",
      key_features: [
        "Responsive web design",
        "User-friendly mobile apps",
        "Cross-platform compatibility",
        "SEO optimization",
      ],
      image: logo3,
    },
    {
      name: "Enterprise Solutions",
      description:
        "We deliver enterprise-level solutions designed to enhance productivity, automate processes, and streamline operations.",
      key_features: [
        "Business process automation",
        "ERP solutions",
        "Custom CRM systems",
        "Seamless operations management",
      ],
      image: logo0,
    },
    {
      name: "Cloud Solutions and DevOps",
      description:
        "Our cloud computing services enable businesses to leverage scalable, secure, and cost-effective infrastructure. Our DevOps practices ensure efficient deployment, continuous integration, and seamless maintenance.",
      key_features: [
        "Scalable cloud infrastructure",
        "Cost-effective solutions",
        "Continuous integration and deployment",
        "Automated monitoring and maintenance",
      ],
      image: logo4,
    },
    {
      name: "Cybersecurity Services",
      description:
        "Protecting your digital assets is our top priority. We provide comprehensive cybersecurity solutions to safeguard your data and ensure compliance with industry standards.",
      key_features: [
        "End-to-end encryption",
        "Threat detection and response",
        "Compliance with industry regulations",
        "Data protection and privacy",
      ],
      image: logo1,
    },
    {
      name: "IT Consulting",
      description:
        "We help businesses make informed technology decisions by providing strategic IT consulting and support, aimed at enhancing performance and fostering growth.",
      key_features: [
        "Technology strategy development",
        "Performance optimization",
        "Risk assessment and management",
        "IT infrastructure consulting",
      ],
      image: logo5,
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        scrollSnapAlign: "center",
        perspective: "500px",
        margin: "150px 0 0 0",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Our Main Areas
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "20px", sm: "40px", md: "60px" },
          overflowY: "auto", // Enable vertical scrolling
          maxHeight: "100%", // Restrict height to enable scrolling within the box
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            margin: { xs: "500px 0 0 0", md: "0", sm: "0" },
          }}
        >
          {services.map((service, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
              >
                <Card className="card">
                  <CardHeader
                    avatar={
                      <Avatar aria-label="logo">
                        <CardMedia
                          component="img"
                          height="194"
                          image={service.image}
                          alt={service.name}
                        />
                      </Avatar>
                    }
                    title={service.name}
                    subheader={service.key_features[0]}
                  />
                  <CardContent>
                    <Typography variant="body2">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default React.memo(Services);
