import { Avatar, Grid2, Stack, Typography } from "@mui/material";
import { profileData } from "./utils";
import useStyles from "./styles";

const Profile = () => {
  const styles = useStyles();
  return (
    <Stack display="flex" direction="row">
      <Avatar
        alt={profileData.name}
        src={profileData.picture}
        sx={styles.avatar}
      />
      <Grid2
        container
        display="flex"
        direction="column"
        gap={4}
        paddingLeft={4}
      >
        <Grid2>
          <Typography variant="h3">{profileData.name}</Typography>
        </Grid2>
        <Grid2>
          <Typography variant="h5">{profileData.bio}</Typography>
        </Grid2>
      </Grid2>
    </Stack>
  );
};
export default Profile;
