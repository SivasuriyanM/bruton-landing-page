import React, { Suspense, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/Contact";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import "./App.css";

const HeroSection = React.lazy(() => import("./components/HeroSection"));

// Parallax hook for motion effects
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Parallax effect wrapper for each section
function SectionWrapper({ id, Component }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <Component />
      </div>
      <motion.h2 style={{ y }}>{`#${id}`}</motion.h2>
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <SectionWrapper id={"HeroSection"} Component={HeroSection} />
        <SectionWrapper id={"AboutUs"} Component={AboutUs} />
        <SectionWrapper id={"Services"} Component={Services} />
        <SectionWrapper id={"Team"} Component={Team} />
        <SectionWrapper id={"Testimonials"} Component={Testimonials} />
        <SectionWrapper id={"Contact"} Component={ContactForm} />
      </Suspense>

      <motion.div className="progress" style={{ scaleX }} />
      <Footer />
    </>
  );
}

export default App;
