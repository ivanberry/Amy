const User = require('../ultis/user');
const URL = require('../ultis/request');

const UserModel = require('../model/User');

require('../ultis/test-ultis');

const chai = require('chai');
const except = chai.expect;


const rp = require('request-promise');
const url = `${URL}/users`;

describe('User API Test', () => {

	beforeEach(done => {
		UserModel.remove({}, err => {
			done();
		});
	});

	it('basic-test', done => {
		except(2).to.equal(2);
		done();
	});

	it('Get none users', done => {
		rp(url)
			.then(res => {
				res = JSON.parse(res);
				except(res.statusCode).to.be.equal(200);
				except(res.message).to.be.equal('No Users Exits!');
				except(res.data)
					.to.be.an('array')
					.to.lengthOf(0);
				done();
			})
			.catch(err => {
				done(err);
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
					done(err);
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
			json: true
		};

		rp(options)
			.then(function(res) {
				except(res.statusCode).to.be.equal(200);
				except(res.message).to.be.equal('Success!');
				done();
			})
			.catch(err => {
				done(err);
			});
	});

	it('Register user with same name', done => {
		let user = new User({
			name: 'tab',
			password: 'tab'
		});
		user.createUser(err => {
			if (err) throw new Error(err);

			var options = {
				method: 'POST',
				uri: url,
				body: {
					name: 'tab',
					password: 'tab'
				},
				json: true
			};

			rp(options)
				.then(function(res) {
					except(res.statusCode).to.be.equal(200);
					except(res.message).to.be.equal('Name has been used');
					done();
				})
				.catch(err => {
					done(err);
				});
		});
	});
});
