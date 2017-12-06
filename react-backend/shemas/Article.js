const mongoose = require('mongoose');

module.exports = new mongoose.Schema(
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
			type: String,
			required: true
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
