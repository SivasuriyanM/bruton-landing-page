import React from "react";
import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
const teamMembers = [
  {
    name: "Bob Johnson",
    role: "CEO",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://via.placeholder.com/150",
  },
];

function Team() {
  return (
    <>
      <Typography id="team" variant="h4" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={6}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.2 }}>
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default React.memo(Team);
