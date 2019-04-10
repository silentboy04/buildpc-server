const mongoose = require('mongoose');
const shortid = require('shortid');

const vga = mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: shortid.generate
    },
    brand: {
        type: String,
        required: true,
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
    vgaimage: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Vga', vga);