var chai = require('chai');
var assertArrays = require('chai-arrays');
chai.use(assertArrays);
var expect = chai.expect;

require('../ultis/test-ultis');

const bcrypt = require('bcrypt');
const PostModel = require('../model/Article');
const Article = require('../ultis/article');

let _p = {
	title: 'title',
	body: 'body',
	author: 'tab',
	tags: ['React']
};

describe('Post Collection Tests', () => {
	beforeEach(done => {
		PostModel.remove({}, err => {
			done();
		});
	});

	it.only('Create a new post normally', done => {
		let newArticle = new Article(_p);
		newArticle
			.createPost()
			.then(post => {
				console.log(post);
				expect(post._id).not.null;
				expect(post.title)
					.to.be.a('string')
					.to.be.equal(_p.title);
				expect(post.body)
					.to.be.a('string')
					.to.be.equal(_p.body);
				expect(post.tags)
					.not.null
					.to.be.array()
					.to.be.ofSize(1)
					.to.be.equalTo(['React'])
				expect(post.viewCounter).to.be.a('number');
				done();
			})
			.catch(err => {
				done(err);
			});
	});

	it('Create Post without title', done => {
		let newArticle = new Article({
			body: 'body',
			author: 'tab'
		});

		newArticle
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
        let newArticle = new Article({
            title: 'body',
            author: 'tab'
        });

        newArticle
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
