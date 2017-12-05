const mongoose = require('mongoose');
const Postshemas = require('../shemas/Post');

Postshemas.pre('save', next => {
    let now = new Date();
    if (!this.createAt || !this.modifyAt) {
        this.modifyAt = this.createAt = now;
    }
    next();
});

module.exports = mongoose.model('PostModel', Postshemas);