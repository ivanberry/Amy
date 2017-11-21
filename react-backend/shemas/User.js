const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	name: String,
	password: String,
	uuid: String,
	hash: String,
	updateTime: Date
});
