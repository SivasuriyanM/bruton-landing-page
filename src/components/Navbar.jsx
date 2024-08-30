import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Grid,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "About Us", link: "#about" },
    { label: "Services", link: "#services" },
    { label: "Team", link: "#team" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* Mobile View: Display Drawer */}
          {isMobile ? (
            <>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
                spacing={6}
              >
                <Grid item>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                  >
                    =
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="h6" style={{ flexGrow: 1 }}>
                    BRUTON
                  </Typography>
                </Grid>
              </Grid>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List style={{ flexDirection: "column" }}>
                  {menuItems.map((item, index) => (
                    <ListItem button key={index} onClick={handleDrawerToggle}>
                      <Button color="inherit" key={index} href={item.link}>
                        {item.label}
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            // Desktop View: Display Buttons
            <>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
                spacing={6}
              >
                <Grid item>
                  <Typography variant="h6" style={{ flexGrow: 1 }}>
                    BRUTON
                  </Typography>
                </Grid>
                <Grid item color="inherit">
                  {menuItems.map((item, index) => (
                    <Button color="inherit" key={index} href={item.link}>
                      {item.label}
                    </Button>
                  ))}
                </Grid>
              </Grid>
            </>
          )}
        </motion.div>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(Navbar);
