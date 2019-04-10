const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createProc,
    getProc,
    getProcs,
} = require('../controllers/proc');

router.get('/', getProcs);

router.get('/:id', getProc);

router.post('/', upload.single('procimage'), createProc);

module.exports = router;