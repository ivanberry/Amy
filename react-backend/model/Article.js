const mongoose = require('mongoose');
const Articleshemas = require('../shemas/Post');

Articleshemas.pre('save', next => {
    let now = new Date();
    if (!this.createAt || !this.modifyAt) {
        this.modifyAt = this.createAt = now;
    }
    next();
});

module.exports = mongoose.model('ArticleModel', Articleshemas);