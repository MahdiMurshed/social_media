import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Form from "./components/form/form";
import Posts from "./components/posts/posts";
import memories from "./images/memories.png";
import useStyle from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import { useEffect, useState } from "react";

function App() {
  console.log("App.js");
  const classes = useStyle();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    console.log("Dispatching getPosts()");
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            className={classes.mainContainer}
          >
            <Grid item xs={12} md={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
