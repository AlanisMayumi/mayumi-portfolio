import { Avatar, Box } from "@mui/material";
import { profileData } from "./utils";

const Profile = () => {
  return (
    <Box>
      <Avatar
        alt={profileData.name}
        src={profileData.picture}
        sx={{
          width: 200,
          height: 200,
        }}
      />
    </Box>
  );
};
export default Profile;
