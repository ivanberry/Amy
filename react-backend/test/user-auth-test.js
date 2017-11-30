const User = require('../ultis/user');
const URL = require('../ultis/request');

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

	it('User login', done => {
		let newUser = new User({
			name: 'tab',
			password: '123'
		});
		let options = {
			method: 'POST',
			uri: url,
			body: {
				name: 'tab',
				password: '123'
			},
			json: true
		};

		newUser.createUser(err => {
			if (err) throw new Error(err);

			rp(options)
				.then(res => {
					except(res.statusCode).to.be.equal(200);
					except(res.message).to.be.equal('Login Successed!');
					done();
				})
				.catch(err => {
					done(err);
				});
		});
	});

	it('Should Login before get Resources', done => {
		//why status 401 will be catched?
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
				//why when status code set to 401, will be catched?
				//why bodyParser did not parse the err messages?
				except(e.statusCode).to.be.equal(401);
				except(e.message).to.be.equal('User Unauthorized!');
				done(e);
			});
	});
});
