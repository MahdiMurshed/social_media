import PostMessage from "../models/postMessage.js";
export const getPosts = (req, res) => {
  PostMessage.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(404).json({ message: err.message }));
};
export const createPost = (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  newPost
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(409).json({ message: err.message }));
};
