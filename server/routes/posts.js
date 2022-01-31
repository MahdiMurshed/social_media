import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch,
  getPost,
} from "../controller/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();
//?What is this?
router.get("/search", getPostsBySearch);
router.get("/:id", getPost);

router.get("/", getPosts);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
