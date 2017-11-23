const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	uuid: String,
	hash: String,
	updatedAt: {
		type: Date,
		default: Date.now
	}
});
