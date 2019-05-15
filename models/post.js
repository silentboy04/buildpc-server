const mongoose = require('mongoose');
const shortid = require('shortid');

const post = mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: shortid.generate
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    postimage: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Post', post);
