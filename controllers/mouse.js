const mongoose = require('mongoose');
const moment = require('moment');

const Mouse = require('../models/mouse');

const environment = require('../env.json');

exports.getMouses = (req, res, next) => {
    Mouse.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Mouse'
            });
        });
};

exports.getMouse = (req, res, next) => {
    const id = req.params.id;
    Mouse.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Mouse'
            });
        });
};

exports.createMouse = (req, res, next) => {
    const {
        name,
        description,
        price
    } = req.body;
    const mouse = new Mouse({
        name,
        description,
        price,
        mouseimage: req.file.filename
    });
    mouse.save()
        .then(result => {
            return res.status(201).json({
                message: 'Mouse created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create Mouse'
            });
        });
};