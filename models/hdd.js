const mongoose = require('mongoose');
const shortid = require('shortid');

const hdd = mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: shortid.generate
    },
    name: {
        type: String,
        required: true,
    },
    tdp: {
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
    hddimage: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Hdd', hdd);