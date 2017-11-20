const mongoose = require('mongoose');

var Userschema = new mongoose.Schema({
	name: String,
	password: String,
	uuid: String,
	updateTime: Date
});

//a model is a class with which we construct documents
module.exports = mongoose.models.User || mongoose.model('User', Userschema);
