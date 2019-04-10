const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createVga,
    getVga,
    getVgas,
} = require('../controllers/vga');

router.get('/', getVgas);

router.get('/:id', getVga);

router.post('/', upload.single('vgaimage'), createVga);

module.exports = router;