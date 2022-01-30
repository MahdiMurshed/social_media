import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Form from "./components/form/form";
import Posts from "./components/posts/posts";
import memories from "./images/memories.png";
import useStyle from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
