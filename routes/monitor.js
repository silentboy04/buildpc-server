const express = require('express');
const router = express.Router();

const {
    upload
} = require('../middlewares/upload');
const {
    createMonitor,
    getMonitor,
    getMonitors,
} = require('../controllers/monitor');

router.get('/', getMonitors);

router.get('/:id', getMonitor);

router.post('/', upload.single('monitorimage'), createMonitor);

module.exports = router;