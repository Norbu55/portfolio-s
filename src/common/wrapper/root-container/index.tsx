import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RootContainer = styled(Box, {
  name: "Root-Layout-Wrapper",
})`
  margin: 0 auto;
  max-width: 1920px;
  padding: 0px 80px;

  ${(props) => props.theme.breakpoints.down("xl")} {
    padding: 0px 80px;
  }
  ${(props) => props.theme.breakpoints.down("lg")} {
    padding: 0px 60px;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 0px 30px;
  }
`;
