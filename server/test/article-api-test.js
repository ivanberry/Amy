const Article = require('../ultis/article');
const URL = require('../ultis/request');

const ArticleModel = require('../model/Article');

const { notFoundError, serverError, succeeExpect } = require('../ultis/test-helper');

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
				succeeExpect(res, expect);
				expect(res.data).to.be.an('array');
				done();
			})
			.catch(err => {
				//this will catch any error happened in flow
				notFoundError(err, expect);
				done();
			});
	});

	//how to get this name
	it("Get user's Article", done => {
		rp({
			uri: `${url}/tab`,
			json: true
		})
			.then(res => {
				succeeExpect(res, expect);
				expect(res.data).to.be.an('array');
				done();
			})
			.catch(err => {
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
				succeeExpect(res, expect);
				done();
			})
			.catch(err => {
				notFoundError(err, expect);
				done();
			});
	});

	it('Create new Article without title', done => {
		rp({
			method: 'PUT',
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
			method: 'PUT',
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
			body: 'content'
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
				succeeExpect(res, expect);
				done();
			})
			.catch(err => {
				serverError(err, expect);
				done();
			});
	});

	it('Delete article with article id', done => {
		let newArticle = new Article({
			title: 'tab',
			body: 'content'
		});

		newArticle
			.createPost()
			.then(doc => {
				return doc.id;
			})
			.then(id => {
				return rp({
					method: 'DELETE',
					uri: `${url}/${id}`,
					json: true
				});
			})
			.then(res => {
				succeeExpect(res, expect);
				done();
			})
			.catch(err => {
				serverError(err, expect);
				done();
			});
	});

	it('Get particular article with id', done => {
		let newArticle = new Article({
			title: 'tab',
			body: 'content'
		});

		newArticle
			.createPost()
			.then(doc => {
				return doc.id;
			})
			.then(id => {
				return rp({
					method: 'GET',
					uri: `${URL}/article/${id}`,
					json: true
				});
			})
			.then(res => {
				succeeExpect(res, expect);
				done();
			})
			.catch(err => {
				serverError(err, expect);
				done();
			});
	});
});
