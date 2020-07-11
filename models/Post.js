const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    description: String,
    username: String,
  },
  {
    timestamps: true,
  },
);

PostSchema.post('save', function (error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next('Title must be unique');
  } else {
    next(error);
  }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
