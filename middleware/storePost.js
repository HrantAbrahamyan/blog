module.exports = (req, res, next) => {
  if (!req.body.username || !req.body.title || !req.body.description) {
    return res.status(400).json({
      message: 'Invalid data',
    });
  }
  next();
};
