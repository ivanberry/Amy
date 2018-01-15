const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
	tag: {
		type: String,
		default: 'Default',
		required: true
	},
	articles: [
		{
			type: Array,
			ref: 'ArtileModel'
		}
	]
});
