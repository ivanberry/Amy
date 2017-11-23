const mongoose = require('mongoose');
const Userschema = require('../shemas/User');

Userschema.pre('save', next => {
  let now = new Date();
  if (!this.updatedAt) {
    this.updatedAt = now;
  }
  next();
});

//a model is a class with which we construct documents
module.exports = mongoose.model('UserModel', Userschema);
