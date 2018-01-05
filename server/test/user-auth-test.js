const User = require('../ultis/user');
const URL = require('../ultis/request');
const unAuthorizedHelper = require('../ultis/test-helper').unAuthorized;

const UserModel = require('../model/User');

require('../ultis/test-ultis');

const chai = require('chai');
const except = chai.expect;

const rp = require('request-promise');
const url = `${URL}/login`;

describe('User Authorization Test', () => {
	beforeEach(done => {
		UserModel.remove({}, err => {
			done();
		});
	});

	it('Should Login before get Resources', done => {
		rp({
			uri: `${URL}/users`,
			json: true
		})
			.then(res => {
				except(res.statusCode).to.be.equal(200);
				except(res.message).to.be.equal('No Users Exits!');
				done();
			})
			.catch(e => {
				unAuthorizedHelper(e, except);
				done();
			});
	});

	it('Get Resources After login', done => {
		let newUser = new User({
			name: 'tab',
			password: '123'
		});

		let _credients = Buffer.from('tab:123').toString('base64');

		let options = {
			uri: `${URL}/users`,
			headers: {
				Authorization: `Basic ${_credients}`
			},
			json: true
		};

		newUser.createUser(err => {
			if (err) throw new Error(err);
			rp(options)
				.then(res => {
					except(res.statusCode).to.be.equal(200);
					except(res.data)
						.to.be.an('array')
						.with.lengthOf(1);
					done();
				})
				.catch(e => {
					unAuthorizedHelper(e, except);
					done();
				});
		});
	});
});
