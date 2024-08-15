import React from "react";

const Team = () => {
  return (
    <section id="team" className="container py-5">
      <h2 className="text-center">Our Team</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src="path/to/image.jpg"
              className="card-img-top"
              alt="Team Member"
            />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">CEO</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img
              src="path/to/image.jpg"
              className="card-img-top"
              alt="Team Member"
            />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
