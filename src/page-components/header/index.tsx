import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Box,
  Button,
  ListItemButton,
  ListItemText,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import { RootContainer } from "../../common/wrapper/root-container";
import Avatar from "@mui/material/Avatar";
import About from "../about";

import { useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const data = [
  {
    title: "Home",
    link: "hero-section",
  },
  {
    title: "About Me",
    link: "about-section",
  },
  {
    title: "Project",
    link: "project",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

function Header() {
  return (
    <AppBar sx={{ background: "#ffff", boxShadow: "none" }}>
      <Toolbar>
        <RootContainer
          sx={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Stack mt={2} direction="row" width="100%" alignItems="center">
            <Box>
              <Avatar />
            </Box>
            <Stack
              width="100%"
              columnGap={2}
              ml={2.5}
              direction="row"
              pr={0.5}
              border={1}
            >
              {data.map((item) => (
                // <Button onClick={() => navigate(item.link)}>
                //   <Button> {item.title} </Button>
                // </Button>
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                  isDynamic={true}
                  key={item.link}
                >
                  <Typography color="black">{item.title}</Typography>
                </Link>
              ))}
            </Stack>
          </Stack>
        </RootContainer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
