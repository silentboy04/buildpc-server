const mongoose = require('mongoose');
const moment = require('moment');

const Cooler = require('../models/cooler');

const environment = require('../env.json');

exports.getCoolers = (req, res, next) => {
    Cooler.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Cooler'
            });
        });
};

exports.getCooler = (req, res, next) => {
    const id = req.params.id;
    Cooler.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Cooler'
            });
        });
};

exports.createCooler = (req, res, next) => {
    const {
        name,
        tdp,
        description,
        price
    } = req.body;
    const cooler = new Cooler({
        name,
        tdp,
        description,
        price,
        coolerimage: req.file.filename
    });
    cooler.save()
        .then(result => {
            return res.status(201).json({
                message: 'Cooler created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create Cooler'
            });
        });
};