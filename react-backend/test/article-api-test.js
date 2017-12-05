const Article = require('../ultis/article');
const URL = require('../ultis/request');

const ArticleModel = require('../model/Article');

const notFoundError = require('../ultis/test-helper').notFoundError;

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
      method: 'GET',
      uri: `${url}/1`,
			json: true
		})
			.then(res => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.message).to.be.equal('Success!');
        expect(res.articles).to.be.an('array');
        done();
      })
			.catch(err => {
        notFoundError(err, expect);
        done();
      });
	});
});
