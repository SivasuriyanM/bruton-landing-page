import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

const Testimonials = React.lazy(() => import("./components/Testimonials"));
const Team = React.lazy(() => import("./components/Team"));

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <HeroSection />
        <AboutUs />
        <Services />
        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div>Loading Team...</div>}>
          <Team />
        </Suspense>
        <ContactForm />
      </Container>
      <Footer />
    </div>
  );
}

export default React.memo(App);
