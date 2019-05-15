const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createPost,
    getPost,
    getPosts,
} = require('../controllers/post');

router.get('/', getPosts);

router.get('/:id', getPost);

router.post('/', upload.single('postimage'), createPost);

module.exports = router;
