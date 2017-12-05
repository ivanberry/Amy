const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    },
    modifyAt: {
        type: Date,
        default: new Date()
    },
    tag: {
        type: String,
        default: 'Default'
    },
    author: {
        type: String,
        required: true
    },
    viewCounter: {
        type: Number,
        default: 0
    }
});