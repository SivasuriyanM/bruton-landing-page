import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="jumbotron jumbotron-fluid text-white"
      style={{
        backgroundImage: "url(assets/images/hero-bg.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-center">
        <h1 className="display-4">Welcome to BRUTON Technologies</h1>
        <p className="lead">
          Your partner in Software Development and Cybersecurity
        </p>
        <a href="#services" className="btn btn-primary btn-lg mr-2">
          Learn More
        </a>
        <a href="#contact" className="btn btn-outline-light btn-lg">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
