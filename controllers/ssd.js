const mongoose = require('mongoose');
const moment = require('moment');

const Ssd = require('../models/ssd');

const environment = require('../env.json');

exports.getSsds = (req, res, next) => {
    Ssd.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get SSD'
            });
        });
};

exports.getSsd = (req, res, next) => {
    const id = req.params.id;
    Ssd.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get SSD'
            });
        });
};

exports.createSsd = (req, res, next) => {
    const {
        brand,
        name,
        tdp,
        description,
        price
    } = req.body;
    const ssd = new Ssd({
        brand,
        name,
        tdp,
        description,
        price,
        ssdimage: req.file.filename
    });
    ssd.save()
        .then(result => {
            return res.status(201).json({
                message: 'SSD created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create SSD'
            });
        });
};