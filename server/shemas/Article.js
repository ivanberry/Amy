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
			type: Array,
			ref: 'TagModel'
		},
		authorId: {
			type: Schema.Types.ObjectId,
			ref: 'UserModel'
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
