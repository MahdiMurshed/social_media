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

const Posts = ({ setCurrentId }) => {
  const classes = useStyle();

  //TODO
  const { posts, isLoading } = useSelector((state) => {
    console.log(state);
    console.log(state.posts);
    return state.posts;
  });
  console.log(posts);
  if (!posts.length && !isLoading) {
    return <div>No posts</div>;
  }
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={3} alignItems="stretch">
      {posts?.map((post) => (
        <Grid item xs={12} sm={6} lg={3} key={post._id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
