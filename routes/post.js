const express = require('express');
const homePageController = require('../controller/homePage');
const storePostController = require('../controller/storePost');
const getPostController = require('../controller/getPost');
const auth = require('../middleware/auth');
const storePost = require('../middleware/storePost');

const router = express.Router();

router.get('/posts', homePageController);
router.get('/post/:id', getPostController);
router.post('/posts/new', auth, storePost, storePostController);

module.exports = router;
