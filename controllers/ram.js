const mongoose = require('mongoose');
const moment = require('moment');

const Ram = require('../models/ram');

const environment = require('../env.json');

exports.getRams = (req, res, next) => {
    Ram.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Ram'
            });
        });
};

exports.getRam = (req, res, next) => {
    const id = req.params.id;
    Ram.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Ram'
            });
        });
};

exports.createRam = (req, res, next) => {
    const {
        name,
        tdp,
        description,
        price
    } = req.body;
    const ram = new Ram({
        name,
        tdp,
        description,
        price,
        ramimage: req.file.filename
    });
    ram.save()
        .then(result => {
            return res.status(201).json({
                message: 'Ram created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create Ram'
            });
        });
};