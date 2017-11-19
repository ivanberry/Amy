const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app');

var schema = new mongoose.Schema({
	name: String,
	password: String,
	hash: String,
	salted: String
});

//a model is a class with which we construct documents
module.exports = mongoose.model('User', schema);
