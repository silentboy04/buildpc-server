const mongoose = require('mongoose');
const moment = require('moment');

const Proc = require('../models/proc');

const environment = require('../env.json');

exports.getProcs = (req, res, next) => {
    Proc.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get procesor'
            });
        });
};

exports.getProc = (req, res, next) => {
    const id = req.params.id;
    Proc.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Procesor'
            });
        });
};

exports.createProc = (req, res, next) => {
    const {
        brand,
        name,
        tdp,
        socket,
        description,
        price
    } = req.body;
    const proc = new Proc({
        brand,
        name,
        tdp,
        socket,
        description,
        price,
        procimage: req.file.filename
    });
    proc.save()
        .then(result => {
            return res.status(201).json({
                message: 'Procesor created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create procesor'
            });
        });
};