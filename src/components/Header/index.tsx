import { Link } from "react-router-dom";
import { AppBar, Box, IconButton, Stack } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { personalLinks } from "./utils";

const Header = () => {
  return (
    <AppBar position="fixed" color="transparent">
      <Stack width="100%" display="flex" direction="row">
        <Box sx={{ display: "flex", flexGrow: 3, gap: 2, padding: 2 }}>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact-me">Contact me</Link>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
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
      </Stack>
    </AppBar>
  );
};
export default Header;
