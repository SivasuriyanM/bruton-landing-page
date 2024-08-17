import React, { useRef } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import "../styles/service.css";

function Services() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
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
    },
  ];

  return (
    <>
      <ul ref={ref}>
        {services.map((service) => (
          <li>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h5">{service.name}</Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(Services);
