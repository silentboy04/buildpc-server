const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createSsd,
    getSsd,
    getSsds,
} = require('../controllers/ssd');

router.get('/', getSsds);

router.get('/:id', getSsd);

router.post('/', upload.single('ssdimage'), createSsd);

module.exports = router;