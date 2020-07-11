const express = require('express');
const loginUserController = require('../controller/loginUser');
const registerUserController = require('../controller/storeUser');
const logoutController = require('../controller/logout');

const router = express.Router();

router.post('/login', loginUserController);
router.post('/register', registerUserController);
router.get('/logout', logoutController);

module.exports = router;
