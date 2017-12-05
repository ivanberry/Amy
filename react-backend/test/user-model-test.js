var chai = require('chai');
var expect = chai.expect;

require('../ultis/test-ultis'); //what's the execute context

const bcrypt = require('bcrypt');
const UserModel = require('../model/User');
const User = require('../ultis/user');

let o = {
	name: 'tab',
	password: 'tab'
};

describe('Database Tests', () => {
	describe('Create user', () => {

		beforeEach(done => {
			UserModel.remove({}, err => {
				done();
			});
		});

		it('create a new user', done => {
			let newUser = new User(o);
			newUser.createUser(err => {
				if (err) throw new Error(err);
				UserModel.findOne({ name: 'tab' })
					.then(doc => {
						expect(doc).to.be.a('object');
						done();
					})
					.catch(e => done(e));
			});
		});

		it('Has hashed user password', done => {
			let newUser = new User(o);
			newUser.createUser(err => {
				if (err) throw new Error(err);
				UserModel.findOne({ name: 'tab' }, '-name', { lean: true })
					.then(doc => {
						expect(doc).to.has.ownProperty('hash');
						done();
					})
					.catch(err => {
						throw new Error(err);
					});
			});
		});

		it('Match user password', done => {
			let newUser = new User(o);
			newUser.createUser(err => {
				if (err) throw new Error(err);
				UserModel.findOne({ name: 'tab' }, 'hash', { lean: true })
					.then(doc => {
						bcrypt.compare('tab', doc.hash, (err, res) => {
							expect(res).to.true;
							done();
						});
					})
					.catch(err => {
						throw new Error(err);
					});
			});
		});
	});
});
