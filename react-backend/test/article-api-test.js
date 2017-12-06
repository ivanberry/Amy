const Article = require('../ultis/article');
const URL = require('../ultis/request');

const ArticleModel = require('../model/Article');

const notFoundError = require('../ultis/test-helper').notFoundError;
const serverError = require('../ultis/test-helper').serverError;

require('../ultis/test-ultis');

const chai = require('chai');
const expect = chai.expect;

const rp = require('request-promise');
const url = `${URL}/articles`;

describe('User API Test', () => {
	beforeEach(done => {
		ArticleModel.remove({}, err => {
			done();
		});
	});

	it('Get all articles with page', done => {
		rp({
			uri: `${url}/1`,
			json: true
		})
			.then(res => {
				expect(res).to.exist;
				expect(res.statusCode).to.be.equal(200);
				expect(res.message).to.be.equal('Success!');
				expect(res.data).to.be.an('array');
				done();
			})
			.catch(err => {
				//this will catch any error happened in flow
				notFoundError(err, expect);
				done();
			});
	});

	it('Create new Article', done => {
		rp({
			method: 'POST',
			uri: url,
			body: {
				title: 'tab',
				body: 'content',
				author: 'tab'
			},
			json: true
		})
			.then(res => {
				expect(res.statusCode).to.be.equal(200);
				expect(res.message).to.be.equal('Success!');
				done();
			})
			.catch(err => {
				notFoundError(err, expect);
				done();
			});
	});

	it('Create new Article without title', done => {
		rp({
			method: 'POST',
			uri: url,
			body: {
				body: 'content',
				author: 'tab'
			},
			json: true
		}).catch(err => {
			serverError(err, expect);
			done();
		});
	});

	it('Create new Article without body', done => {
		rp({
			method: 'POST',
			uri: url,
			body: {
				title: 'content',
				author: 'tab'
			},
			json: true
		}).catch(err => {
			serverError(err, expect);
			done();
		});
	});

	it('Update the article with article id', done => {
		// creat new article first
		let newArticle = new Article({
			title: 'tab',
			body: 'content',
			author: 'tab'
		});

		newArticle
			.createPost()
			.then(doc => {
				return doc.id;
			})
			.then(id => {
				return rp({
					method: 'POST',
					uri: `${url}/${id}`,
					body: {
						title: 'new Title',
						body: 'new content'
					},
					json: true
				});
			})
			.then(res => {
				console.log(res);
				done();
			})
			.catch(err => {
				console.log(err);
				serverError(err, expect);
				done();
			});
	});
});
