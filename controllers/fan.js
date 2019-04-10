const mongoose = require('mongoose');
const moment = require('moment');

const Fan = require('../models/fan');

const environment = require('../env.json');

exports.getFans = (req, res, next) => {
    Fan.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Fan'
            });
        });
};

exports.getFan = (req, res, next) => {
    const id = req.params.id;
    Fan.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Fan'
            });
        });
};

exports.createFan = (req, res, next) => {
    const {
        name,
        tdp,
        description,
        price
    } = req.body;
    const fan = new Fan({
        name,
        tdp,
        description,
        price,
        fanimage: req.file.filename
    });
    fan.save()
        .then(result => {
            return res.status(201).json({
                message: 'Fan created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create Fan'
            });
        });
};