const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
  const { email, password } = req.body;
  User.findOne(
    {
      email,
    },
    (error, user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            req.session.userId = user._id;
            res.status(200).json({
              message: 'success',
              user: {
                username: user.username,
                email: user.email,
              },
            });
          } else {
            res.status(401).json({
              status: 'error',
              message: 'Invalid email or password',
            });
          }
        });
      } else {
        res.status(400).json({
          status: 'error',
          message: 'User not found',
        });
      }
    },
  );
};
