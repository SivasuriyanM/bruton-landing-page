import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TeamMember = ({ src, alt, name, role }) => (
  <div className="team-member">
    <LazyLoadImage src={src} alt={alt} effect="blur" className="card-img-top" />
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{role}</p>
  </div>
);

export default TeamMember;
