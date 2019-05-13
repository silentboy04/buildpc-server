const mongoose = require('mongoose');
const moment = require('moment');

const Video = require('../models/video');

const environment = require('../env.json');

exports.getVideos = (req, res, next) => {
    Video.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get video'
            });
        });
};

exports.getVideo = (req, res, next) => {
    const id = req.params.id;
    Vga.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get video'
            });
        });
};

exports.createVideo = (req, res, next) => {
    const {
        name,
    } = req.body;
    const video = new Video({
        name,
        tutorvideo: req.file.filename
    });
    video.save()
        .then(result => {
            return res.status(201).json({
                message: 'Video created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create video'
            });
        });
};
