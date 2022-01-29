import Post from "./post/post";
import useStyle from "./styles";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import {
  DeleteOutline,
  DeleteOutlined,
  MoreHoriz,
  ThumbUpAltRounded,
} from "@material-ui/icons";

const Posts = () => {
  const classes = useStyle();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={3} alignItems="stretch">
      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post._id}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
