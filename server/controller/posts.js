import PostMessage from "../models/postMessage.js";
export const getPosts = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const total = await PostMessage.countDocuments({});
    const startingIndex = (Number(page) - 1) * LIMIT;
    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startingIndex);
    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    console.log("get posts error");
  }
};
export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostMessage.findById(id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};
export const getPostsBySearch = async (req, res) => {
  console.log(req.query);
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const posts = await PostMessage.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: posts });
  } catch (error) {
    console.log("controller error");
    res.status(404).json({ message: error.message });
  }
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

export const commentPost = async (req, res) => {
  const { value } = req.body;
  const id = req.params.id;
  console.log(value);
  console.log(id);
  const post = await PostMessage.findById(id);
  post.comments.push(value);
  console.log("after push");

  const newPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
  console.log(newPost);
  res.json(newPost);
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
