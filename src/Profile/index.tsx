import { Avatar, Box } from "@mui/material";
import { profileData } from "./utils";

const Profile = () => {
  return (
    <Box>
      <Avatar alt={profileData.name} />
    </Box>
  );
};
export default Profile;
