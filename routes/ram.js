const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createRam,
    getRam,
    getRams,
} = require('../controllers/ram');

router.get('/', getRams);

router.get('/:id', getRam);

router.post('/', upload.single('ramimage'), createRam);

module.exports = router;