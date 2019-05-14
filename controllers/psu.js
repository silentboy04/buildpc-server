const mongoose = require('mongoose');
const moment = require('moment');

const Psu = require('../models/psu');

const environment = require('../env.json');

exports.getPsus = (req, res, next) => {
    Psu.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Psu'
            });
        });
};

exports.getPsu = (req, res, next) => {
    const id = req.params.id;
    Psu.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Psu'
            });
        });
};

exports.createPsu = (req, res, next) => {
    const {
        brand,
        name,
        description,
        price
    } = req.body;
    const psu = new Psu({
        brand,
        name,
        description,
        price,
        psuimage: req.file.filename
    });
    psu.save()
        .then(result => {
            return res.status(201).json({
                message: 'Psu created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create Psu'
            });
        });
};
