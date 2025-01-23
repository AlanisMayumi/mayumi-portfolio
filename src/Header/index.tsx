import { AppBar, Badge, Box, Container, IconButton } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";

import NotificationsIcon from "@mui/icons-material/Notifications";
import { AccountCircle } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={() =>
              (window.location.href = "mailto:alanismayumidev@gmail.com")
            }
          >
            <MailIcon />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => window.open("https://github.com/AlanisMayumi", "_blank")}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Header;
