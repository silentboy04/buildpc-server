const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createHdd,
    getHdd,
    getHdds,
} = require('../controllers/hdd');

router.get('/', getHdds);

router.get('/:id', getHdd);

router.post('/', upload.single('hddimage'), createHdd);

module.exports = router;