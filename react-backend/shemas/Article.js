const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		body: {
			type: String,
			required: true
		},
		tag: {
			type: String,
			default: 'Default'
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		viewCounter: {
			type: Number,
			default: 0
		}
	},
	{
		timestamps: true
	}
);
