const express = require('express');
// router method
const router = express.Router();
const postController = require('../controllers/post.controler');

router.get('/', postController.index);

module.exports = router;