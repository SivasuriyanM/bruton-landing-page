import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Team = lazy(() => import("./components/Team"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Suspense fallback={<div>Loading...</div>}>
        <Team />
      </Suspense>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
