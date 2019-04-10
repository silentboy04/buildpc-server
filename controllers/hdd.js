const mongoose = require('mongoose');
const moment = require('moment');

const Hdd = require('../models/hdd');

const environment = require('../env.json');

exports.getHdds = (req, res, next) => {
    Hdd.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get HDD'
            });
        });
};

exports.getHdd = (req, res, next) => {
    const id = req.params.id;
    Hdd.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get HDD'
            });
        });
};

exports.createHdd = (req, res, next) => {
    const {
        name,
        tdp,
        description,
        price
    } = req.body;
    const hdd = new Hdd({
        name,
        tdp,
        description,
        price,
        hddimage: req.file.filename
    });
    hdd.save()
        .then(result => {
            return res.status(201).json({
                message: 'HDD created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create HDD'
            });
        });
};