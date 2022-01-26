export default function reducer(posts = [], action) {
  console.log("reducers/posts.js");
  switch (action.type) {
    case "CREATE":
      return [...posts, action.payload];
    case "FETCH_ALL":
      return action.payload;
    default:
      return posts;
  }
}
