const URL = require('../ultis/request');

const Tag = require('../ultis/tag');
const TagModel = require('../model/Tag');

const { notFoundError, serverError, succeeExpect } = require('../ultis/test-helper');

require('../ultis/test-ultis');

const chai = require('chai');
const expect = chai.expect;

const rp = require('request-promise');

describe('Tag api test collection', () => {
	beforeEach(done => {
		TagModel.remove({}, err => {
			done();
		});
	});

	/*
  0. Seperately add tag
  1. delete tag
  2. query articles with particular tag
  */
	it('Add custom tag', done => {
		rp({
			method: 'POST',
			uri: `${URL}/addTag`,
			body: {
				name: 'custom'
			},
			json: true
		})
			.then(res => {
				succeeExpect(res, expect);
				done();
			})
			.catch(err => {
				notFoundError(err, expect);
				done(err);
			});
	});

	it('Delete particular tag', done => {
		let newTag = new Tag({
			name: 'tag'
		});

		newTag
			.createNewTag()
			.then(doc => {
				return rp({
					method: 'POST',
					uri: `${URL}/deleteTag`,
					body: {
						name: 'tag'
					},
					json: true
				});
			})
			.then(res => {
				succeeExpect(res, expect);
				done();
			})
			.catch(err => {
				notFoundError(err, expect);
				done(err);
			});
	});

	it('Delete particular tag without name', done => {
		let newTag = new Tag({
			name: 'tag'
		});

		newTag
			.createNewTag()
			.then(doc => {
				return rp({
					method: 'POST',
					uri: `${URL}/deleteTag`,
					json: true
				});
			})
			.then(res => {
				succeeExpect(res, expect);
				done();
			})
			.catch(err => {
        expect(err).to.be.exist;
        expect(err.statusCode).to.be.equal(404);
        expect(err).message = 'tag name needed';
				done(err);
			});
	});
});
