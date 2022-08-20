import { Typography, Stack, Box } from "@mui/material";
import React from "react";

function index() {
  return (
    <>
      <Stack width="100%" textAlign="center" mt={2}>
        <Typography variant="h4">Services</Typography>
        <Typography variant="h3">Check My Services</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-evenly" mt={4}>
        <Box width="350px" height="350px" border={0.5} borderRadius="10px" />
        <Box width="350px" height="350px" border={0.5} borderRadius="10px" />
        <Box width="350px" height="350px" border={0.5} borderRadius="10px" />
      </Stack>
    </>
  );
}

export default index;
