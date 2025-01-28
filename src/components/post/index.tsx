import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type PostProps = {
  title: string;
  link: string;
  image: string;
  summary: string;
};

const Post = ({ title, link, image, summary }: PostProps) => {
  return (
    <Card sx={{ maxWidth: "35vw", height: "60vh" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="project image"
        />
        <CardContent
          sx={{
            height: "25vh",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              color: "text.secondary",
            }}
          >
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(link, "_blank")}
        >
          More
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
