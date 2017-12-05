const PostModel = require('../model/Article');
const config = require('../config/_config');
const bcrcyt = require('bcrypt');

PostModel.on('index', function(err) {
	if (err) {
		console.error('Post index error: %s', err);
	} else {
		console.info('Post indexing complete');
	}
});

class Post {
	constructor(opt) {
		Object.assign(this, opt);
	}

	//invoke as promise
	createPost(resolve, reject) {
		let newPost = new PostModel(this);
		return newPost.save();
	}
}

module.exports = Post;
