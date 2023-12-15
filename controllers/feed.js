exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is my firstPost" }]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);
  //create a post in db
  res.status(201).json({
    message: "Post created successfullly",
    post: { id: new Date().toString(), title: title, content: content }
  });
};
