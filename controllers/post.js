const mongoose = require('mongoose');
const moment = require('moment');

const Post = require('../models/post');

const environment = require('../env.json');

exports.getCasings = (req, res, next) => {
    Post.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Post'
            });
        });
};

exports.getCasing = (req, res, next) => {
    const id = req.params.id;
    Post.findById(id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(500).json({
                message: 'cannot get Post'
            });
        });
};

exports.createCasing = (req, res, next) => {
    const {
        name,
        description,
        price
    } = req.body;
    const post = new Post({
        name,
        description,
        price,
        casingimage: req.file.filename
    });
    post.save()
        .then(result => {
            return res.status(201).json({
                message: 'Post created'
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: 'Failed to create Post'
            });
        });
};
