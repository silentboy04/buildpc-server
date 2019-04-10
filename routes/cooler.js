const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createCooler,
    getCooler,
    getCoolers,
} = require('../controllers/cooler');

router.get('/', getCoolers);

router.get('/:id', getCooler);

router.post('/', upload.single('coolerimage'), createCooler);

module.exports = router;