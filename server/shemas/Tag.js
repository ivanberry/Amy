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
			type: Schema.Types.ObjectId,
			ref: 'ArtileModel'
		}
	]
});
