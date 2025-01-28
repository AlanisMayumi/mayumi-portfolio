import { Grid2 } from "@mui/material";

import Page from "../../components/page";
import Post from "../../components/post";
import { projectsMock } from "./utils";

const Projects = () => {
  return (
    <Page>
      <Grid2 container spacing={2}>
        {projectsMock.map((projectItem) => (
          <Grid2 key={projectItem.id}>
            <Post
              title={projectItem.title}
              link={projectItem.link}
              image={projectItem.image}
              summary={projectItem.summary}
            />
          </Grid2>
        ))}
      </Grid2>
    </Page>
  );
};
export default Projects;
