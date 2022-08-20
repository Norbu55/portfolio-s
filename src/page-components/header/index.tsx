import { AppBar, Toolbar, Typography, Stack, Box, Button } from "@mui/material";
import React from "react";
import { RootContainer } from "../../common/wrapper/root-container";
import Avatar from "@mui/material/Avatar";

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
          <Stack
            mt={2}
            direction="row"
            width="100%"
            alignItems="center"
            // sx={{ border: "1px solid black" }}
          >
            <Box>
              <Avatar />
            </Box>
            <Stack width="100%" columnGap={2} ml={2.5} direction="row" pr={0.5}>
              <Button>
                <Typography variant="h5">About Me</Typography>
              </Button>
              <Button>
                <Typography variant="h5">Skills</Typography>
              </Button>
              <Button>
                <Typography variant="h5">Project</Typography>
              </Button>
              <Button>
                <Typography variant="h5">Contact</Typography>
              </Button>
            </Stack>
          </Stack>
        </RootContainer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
