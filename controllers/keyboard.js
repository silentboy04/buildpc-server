const mongoose = require('mongoose');
const moment = require('moment');

const Keyboard = require('../models/keyboard');

const environment = require('../env.json');

exports.getKeyboards = (req, res, next) => {
    Keyboard.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Keyboard'
            });
        });
};

exports.getKeyboard = (req, res, next) => {
    const id = req.params.id;
    Keyboard.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Keyboard'
            });
        });
};

exports.createKeyboard = (req, res, next) => {
    const {
        name,
        description,
        price
    } = req.body;
    const keyboard = new Keyboard({
        name,
        description,
        price,
        keyboardimage: req.file.filename
    });
    keyboard.save()
        .then(result => {
            return res.status(201).json({
                message: 'keyboard created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create keyboard'
            });
        });
};