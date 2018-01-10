const mongoose = require('mongoose');
const Tagschema = require('../shemas/Tag');

module.exports = mongoose.model('TagModel', Tagschema);
