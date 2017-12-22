const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
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
	},
	articles: [{
		type: Schema.Types.ObjectId, ref: 'Articles'
	}]
});
