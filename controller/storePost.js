const Post = require('../models/Post');

module.exports = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body });
    res.status(200).json({
      status: 'success',
      post,
    });
  } catch (err) {
    res.status(409).json({
      status: 'error',
      message: err,
    });
  }
};
