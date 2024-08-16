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
  ListItemText,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          BRUTON Technologies
        </Typography>

        {/* Mobile View: Display Drawer */}
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              =
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <List>
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
            {menuItems.map((item, index) => (
              <Button color="inherit" key={index} href={item.link}>
                {item.label}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(Navbar);
