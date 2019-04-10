const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createPsu,
    getPsus,
    getPsu,
} = require('../controllers/psu');

router.get('/', getPsus);

router.get('/:id', getPsu);

router.post('/', upload.single('psuimage'), createPsu);

module.exports = router;