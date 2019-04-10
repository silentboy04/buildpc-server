const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createKeyboard,
    getKeyboard,
    getKeyboards,
} = require('../controllers/keyboard');

router.get('/', getKeyboards);

router.get('/:id', getKeyboard);

router.post('/', upload.single('keyboardimage'), createKeyboard);

module.exports = router;