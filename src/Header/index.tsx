import { AppBar, Box, Container, IconButton } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { personalLinks } from "./utils";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={() =>
              (window.location.href = `mailto:${personalLinks.mailAddress}`)
            }
          >
            <MailIcon />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => window.open(personalLinks.github, "_blank")}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => window.open(personalLinks.linkedIn, "_blank")}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Header;
