const mongoose = require('mongoose');

var Userschema = new mongoose.Schema({
	name: String,
	password: String,
	uuid: String,
	hash: String,
	updateTime: Date
});

//a model is a class with which we construct documents
module.exports = mongoose.models.UserModel || mongoose.model('UserModel', Userschema);
