import React from "react";
import TeamMember from "./TeamMember";
import image from "../assets/images/TeamMember.jpg";
const teamMember = [
  {
    name: "John Doe",
    role: "CEO",
    image: image,
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: image,
  },
];

const Team = () => {
  return (
    <section id="team" className="container py-5">
      <h2 className="text-center">Our Team</h2>
      <div className="row">
        {teamMember.map((member, index) => (
          <div className="col-md-6">
            <div className="card">
              <TeamMember
                key={index}
                src={member.image}
                name={member.name}
                alt={member.name}
                role={member.role}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
