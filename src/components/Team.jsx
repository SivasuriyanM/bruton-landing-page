import React from "react";
import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

const teamMembers = [
  { name: "John Doe", role: "CEO", image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", role: "CTO", image: "https://via.placeholder.com/150" },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://via.placeholder.com/150",
  },
];

function Team() {
  return (
    <div id="team" style={{ marginTop: "30px" }}>
      <Typography variant="h4" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent style={{ textAlign: "center" }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  style={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography variant="h6" style={{ marginTop: "10px" }}>
                  {member.name}
                </Typography>
                <Typography variant="body2">{member.role}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default React.memo(Team);
