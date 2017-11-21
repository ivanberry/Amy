const User = require('../ultis/user');
const URL = require('../ultis/request');

require('../ultis/test-ultis');

const chai = require('chai');
const except = chai.expect;
const bcrypt = require('bcrypt');
const rp = require('request-promise');
const url = `${URL}/users`;
console.log(url);

describe('User API Test', () => {
	it('basic-test', done => {
		except(2).to.equal(2);
		done();
	});

	it('Get users', done => {
		rp(url)
			.then(res => {
				res = JSON.parse(res);
				except(res.statusCode, 'statueCode').to.be.equal(200);
				except(res.data, 'data').to.be.an('array');
				done();
			})
			.catch(err => done(err));
	});

	it('Register a new user', done => {
		var options = {
			method: 'POST',
			uri: url,
			body: {
				name: 'tab',
				password: 'tab'
			},
			json: true // Automatically stringifies the body to JSON
		};

		rp(options)
			.then(function(res) {
				// POST succeeded...
				console.log(res);
				done();
			})
			.catch(err => {
                throw new Error(err);
			});
	});
});
