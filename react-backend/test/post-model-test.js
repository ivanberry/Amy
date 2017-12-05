var chai = require('chai');
var expect = chai.expect;

require('../ultis/test-ultis');

const bcrypt = require('bcrypt');
const PostModel = require('../model/Post');
const Post = require('../ultis/post');

let _p = {
	title: 'title',
	body: 'body',
	author: 'tab'
};

describe('Post Collection Tests', () => {
	beforeEach(done => {
		PostModel.remove({}, err => {
			done();
		});
	});

	it('Create a new post normally', done => {
		let newPost = new Post(_p);
		newPost
			.createPost()
            .then(post => {
                console.log(post);
                done();
            })
			.catch(err => console.log(err));
	});
});
