const mongoose = require('mongoose');
const Userschema = require('../shemas/User');

//a model is a class with which we construct documents
module.exports = mongoose.model('UserModel', Userschema);
