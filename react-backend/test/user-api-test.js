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
				except(res.message).to.be.equal('Success!');
				except(res.data, 'data').to.be.an('array');
				done();
			})
			.catch(err => {
				throw new Error(err);
			});
	});

	it('Get not empty user list', done => {
		let newUser = new User({
			name: 'tab',
			password: 'tab'
		});
		newUser.createUser(err => {
			if (err) throw new Error(err);
			rp(url)
				.then(res => {
					res = JSON.parse(res);
					except(res.statusCode, 'statusCode').to.be.equal(200);
					except(res.message, 'message').to.be.equal('Success!');
					except(res.data, 'data')
						.to.be.an('array')
						.with.lengthOf(1);
					done();
				})
				.catch(err => {
					throw new Error(err);
				});
		});
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
				//what did you except?
				// POST succeeded...
				console.log(res);
				done();
			})
			.catch(err => {
				throw new Error(err);
			});
	});
});
