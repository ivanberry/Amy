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
				expect(post._id).not.null;
				expect(post.author)
					.to.be.a('string')
					.to.be.equal(_p.author);
				expect(post.title)
					.to.be.a('string')
					.to.be.equal(_p.title);
				expect(post.body)
					.to.be.a('string')
					.to.be.equal(_p.body);
				expect(post.tag)
					.to.be.a('string')
					.to.be.equal('Default');
				expect(post.modifyAt).to.be.a('date').not.null;
				expect(post.createAt).to.be.a('date').not.null;
				expect(post.viewCounter).to.be.a('number');
				done();
			})
			.catch(err => {
				done(err);
			});
	});

	it('Create Post without title', done => {
		let newPost = new Post({
			body: 'body',
			author: 'tab'
		});

		newPost
			.createPost()
			.then(post => {
				done();
			})
			.catch(err => {
                let _err = err.errors.title;
				expect(_err.name).to.be.equal('ValidatorError');
				expect(_err.message).to.be.equal('Path `title` is required.');
				done();
			});
    });
    
    it('Create new Post without body', done => {
        let newPost = new Post({
            title: 'body',
            author: 'tab'
        });

        newPost
            .createPost()
            .then(post => {
                done();
            }).catch(err => {
                let _err = err.errors.body;
                expect(_err.name).to.be.equal('ValidatorError');
                expect(_err.message).to.be.equal('Path `body` is required.');
                done();
            });
    });
});
