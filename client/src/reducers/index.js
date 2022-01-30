import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";
console.log("reducers/index.js");
export default combineReducers({ posts, auth });
