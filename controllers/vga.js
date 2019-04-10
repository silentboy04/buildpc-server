const mongoose = require('mongoose');
const moment = require('moment');

const Vga = require('../models/vga');

const environment = require('../env.json');

exports.getVgas = (req, res, next) => {
    Vga.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get vga'
            });
        });
};

exports.getVga = (req, res, next) => {
    const id = req.params.id;
    Vga.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get vga'
            });
        });
};

exports.createVga = (req, res, next) => {
    const {
        brand,
        name,
        tdp,
        description,
        price
    } = req.body;
    const vga = new Vga({
        brand,
        name,
        tdp,
        description,
        price,
        vgaimage: req.file.filename
    });
    vga.save()
        .then(result => {
            return res.status(201).json({
                message: 'Vga created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create vga'
            });
        });
};