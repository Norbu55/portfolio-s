import { Typography, Stack, Box, Button } from "@mui/material";
import React from "react";
import AboutImg from "../../common/images/about.jpg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CallIcon from "@mui/icons-material/Call";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function index() {
  return (
    <>
      <Stack direction="row" mt={12.5} justifyContent="space-between">
        <Box>
          <img src={AboutImg} alt="about image" height="400px" />
        </Box>

        <Stack mt={12} width="55% " direction="column">
          <Stack>
            <Typography variant="h3">
              How do I define myself .? &#129300;
            </Typography>
            <Typography
              variant="body1"
              maxWidth="550px"
              color="secondary.main"
              pl={5}
              mt={1}
            >
              Well, I'm enthusiatic learner with curious mindset. I began my
              profession at Bipoint Nepal by helping at project Wiseadmit and
              Angel Korean.I also created several landing pages of Wiseadmit and
              Dashboard of Angel Korean.
            </Typography>
          </Stack>

          <Stack direction="row" mt={3} textAlign="center" spacing={5}>
            <Button startIcon={<AccountTreeIcon />}> 1+ experience</Button>
            <Button startIcon={<TaskAltIcon />}> 2+ projects</Button>
            <Button startIcon={<CallIcon />}>24/7 Contact </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
export default index;
