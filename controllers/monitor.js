const mongoose = require('mongoose');
const moment = require('moment');

const Monitor = require('../models/monitor');

const environment = require('../env.json');

exports.getMonitors = (req, res, next) => {
    Monitor.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Monitor'
            });
        });
};

exports.getMonitor = (req, res, next) => {
    const id = req.params.id;
    Monitor.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Monitor'
            });
        });
};

exports.createMonitor = (req, res, next) => {
    const {
        brand,
        description,
        price
    } = req.body;
    const monitor = new Monitor({
        brand,
        description,
        price,
        monitorimage: req.file.filename
    });
    monitor.save()
        .then(result => {
            return res.status(201).json({
                message: 'Monitor created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create Monitor'
            });
        });
};