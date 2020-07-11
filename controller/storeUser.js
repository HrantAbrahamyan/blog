const User = require('../models/User');

module.exports = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      status: 'error',
      message: 'You must send username and password',
    });
  }
  const user = await User.findOne({ email });
  if (user) {
    res.status(400).json({
      status: 'error',
      message: 'A user with that email already exists',
    });
  } else {
    const newUser = await User.create(req.body);
    res.status(200).json({
      username: newUser.username,
      email: newUser.email,
    });
  }
};
