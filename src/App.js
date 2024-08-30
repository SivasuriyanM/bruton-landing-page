import React, { Suspense, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/Contact";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

import "./App.css";

const HeroSection = React.lazy(() => import("./components/HeroSection"));

function SectionWrapper({ id, Component }) {
  const ref = useRef(null);

  return (
    <section ref={ref}>
      <Box
        sx={{
          display: "block",
        }}
      >
        <Component />
      </Box>
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <SectionWrapper id={"home"} Component={HeroSection} />
        <SectionWrapper id={"about"} Component={AboutUs} />
        <SectionWrapper id={"services"} Component={Services} />
        <SectionWrapper id={"team"} Component={Team} />
        <SectionWrapper id={"testimonials"} Component={Testimonials} />
        <SectionWrapper id={"contact"} Component={ContactForm} />
      </Suspense>
      <Footer />
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

export default App;
