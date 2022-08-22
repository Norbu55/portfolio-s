import React from "react";
import { Button, Stack, Grid, TextField } from "@mui/material";

const index = () => {
  return (
    <div id="contact">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={4} mt={10} ml={0.5} width="80%">
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Enter Your Name"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Enter Your Email"
                variant="filled"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Enter Phone Number"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                minRows={4}
                fullWidth
                label="Description"
                type="text"
                variant="filled"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Stack width="10%" mt={4} ml={5}>
        <Button variant="contained">Submit</Button>
      </Stack>
    </div>
  );
};

export default index;
