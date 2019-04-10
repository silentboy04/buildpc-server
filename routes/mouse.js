const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createMouse,
    getMouse,
    getMouses,
} = require('../controllers/mouse');

router.get('/', getMouses);

router.get('/:id', getMouse);

router.post('/', upload.single('mouseimage'), createMouse);

module.exports = router;