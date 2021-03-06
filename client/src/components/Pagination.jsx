// import useStyles from "./styles";
// import React from "react";
// import { Pagination, PaginationItem } from "@material-ui/lab";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getPosts } from "../actions/posts";

// export const Paginate = ({ page }) => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getPosts(page));
//   }, [page]);
//   return (
//     <Pagination
//       count={5}
//       classes={{ ul: classes.ul }}
//       page={1}
//       variant="outlined"
//       color="primary"
//       //error happened
//       renderItem={(item) => (
//         <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
//       )}
//     />
//   );
// };
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";

import { getPosts } from "../actions/posts";
import useStyles from "./styles";

export const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};
