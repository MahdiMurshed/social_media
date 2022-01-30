import PostMessage from "../models/postMessage.js";
export const getPosts = (req, res) => {
  console.log("controller/posts.js: getPosts()");
  PostMessage.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(404).json({ message: err.message }));
};
export const createPost = (req, res) => {
  console.log("controller/posts.js: createPosts()");
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  newPost
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(409).json({ message: err.message }));
};
export const updatePost = (req, res) => {
  const post = req.body;
  const id = req.params.id;
  PostMessage.findByIdAndUpdate(id, { ...post, _id: id }, { new: true }).then(
    (result) => res.json(result)
  );
};
export const deletePost = (req, res) => {
  const id = req.params.id;
  PostMessage.findByIdAndDelete(id).then((result) =>
    res.json({ message: "Post deleted" })
  );
};
export const likePost = async (req, res) => {
  const id = req.params.id;
  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  const post = await PostMessage.findById(id);
  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.send(updatedPost);
};
