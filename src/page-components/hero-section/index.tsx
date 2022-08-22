import { Typography, Stack, Box, Button } from "@mui/material";
import React from "react";
import ProfileImg from "../../common/images/photo.jpg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Header from "../../page-components/header";

function index() {
  return (
    <div id="hero-section">
      <Header />
      <Stack
        direction="row"
        mt={10}
        justifyContent="space-between"
        pl={2}
        pr={2}
      >
        <Stack mt={15} width="100%">
          <Typography variant="h3">Hi,</Typography>
          <Typography variant="h3">I'm Norbu Sherpa, </Typography>
          <Typography variant="h3">
            React.js Developer & UI/UX Designer !
          </Typography>
          <Typography
            variant="body1"
            maxWidth="650px"
            color="secondary.main"
            mt={2}
          >
            I plan and foster encounters that simplify individuals' lives
            through Web and Mobile applications. I work with Figma, Material UI,
            React.js. and Typescript.
          </Typography>
        </Stack>
        <Box>
          <img src={ProfileImg} alt="profile image" height="500px" />
        </Box>
      </Stack>
      <Stack direction="row" width="fit-content" mt={-17} spacing={1.5} pl={2}>
        <Button variant="contained" color="secondary">
          Hire Me
        </Button>
        <Button variant="outlined" endIcon={<ArrowDownwardIcon />}>
          Download CV
        </Button>
      </Stack>
    </div>
  );
}
export default index;
