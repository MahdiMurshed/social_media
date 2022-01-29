import useStyle from "./styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import {
  DeleteOutline,
  DeleteOutlined,
  MoreHoriz,
  ThumbUpAltRounded,
} from "@material-ui/icons";
const Post = ({ post }) => {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button size="small" style={{ color: "white" }} onClick={() => {}}>
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltRounded fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteOutlined size="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
