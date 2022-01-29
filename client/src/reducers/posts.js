import {
  FETCH_ALL,
  UPDATE,
  CREATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

export default function reducer(posts = [], action) {
  console.log("reducers/posts.js");
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case "CREATE":
      return [...posts, action.payload];
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
}
