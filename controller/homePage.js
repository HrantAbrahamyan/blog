const Post = require('../models/Post');

module.exports = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json({
    posts,
  });
};
