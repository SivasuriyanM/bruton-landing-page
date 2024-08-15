import React from "react";

const Services = React.memo(() => {
  return (
    <section id="services" className="container py-5">
      <h2 className="text-center">Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <h3>Web Development</h3>
          <p>Custom web development services.</p>
        </div>
        <div className="col-md-4">
          <h3>Software Solutions</h3>
          <p>Comprehensive software solutions.</p>
        </div>
        <div className="col-md-4">
          <h3>Cybersecurity</h3>
          <p>Robust cybersecurity services.</p>
        </div>
      </div>
    </section>
  );
});

export default Services;
