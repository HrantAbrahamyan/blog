const User = require('../models/User');

module.exports = (req, res, next) => {
  User.findById(req.session.userId, (error, user) => {
    if (error || !user) {
      return res.status(400).json({
        message: 'Invalid User',
      });
    }
    next();
  });
};
