const mongoose = require('mongoose');
const shortid = require('shortid');

const monitor = mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: shortid.generate
    },
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    monitorimage: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Monitor', monitor);