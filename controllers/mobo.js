const mongoose = require('mongoose');
const moment = require('moment');

const Mobo = require('../models/mobo');

const environment = require('../env.json');

exports.getMobos = (req, res, next) => {
    Mobo.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Mobo'
            });
        });
};

exports.getMobo = (req, res, next) => {
    const id = req.params.id;
    Mobo.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Mobo'
            });
        });
};

exports.createMobo = (req, res, next) => {
    const {
        brand,
        name,
        tdp,
        socket,
        description,
        price
    } = req.body;
    const mobo = new Mobo({
        brand,
        name,
        tdp,
        socket,
        description,
        price,
        moboimage: req.file.filename
    });
    mobo.save()
        .then(result => {
            return res.status(201).json({
                message: 'Mobo created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create Mobo'
            });
        });
};