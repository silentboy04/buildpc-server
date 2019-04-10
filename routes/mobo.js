const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createMobo,
    getMobo,
    getMobos,
} = require('../controllers/mobo');

router.get('/', getMobos);

router.get('/:id', getMobo);

router.post('/', upload.single('moboimage'), createMobo);

module.exports = router;