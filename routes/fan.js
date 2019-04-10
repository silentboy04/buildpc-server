const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createFan,
    getFan,
    getFans,
} = require('../controllers/fan');

router.get('/', getFans);

router.get('/:id', getFan);

router.post('/', upload.single('fanimage'), createFan);

module.exports = router;