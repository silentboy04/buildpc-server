const mongoose = require('mongoose');
const moment = require('moment');

const Post = require('../models/Post');

const environment = require('../env.json');

exports.getPosts = (req, res, next) => {
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

exports.getPost = (req, res, next) => {
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

exports.createPost = (req, res, next) => {
    const {
        title,
        description,
    } = req.body;
    const Post = new Post({
        title,
        description,
        Postimage: req.file.filename
    });
    Post.save()
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
