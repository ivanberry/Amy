const bcrypt = require('bcrypt');

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

//execute
require('sinon-mongoose');
require('../ultis/test-ultis');

const UserModel = require('../model/User');
const User = require('../ultis/user');

let o = {
	name: 'tab',
	password: 'tab'
};

describe('Database Tests', () => {
	describe('Create user', () => {
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
				UserModel.findOne({ name: 'tab' },'-name', { lean: true }, (err, doc) => {
                    if (err) throw new Error(err);
                    expect(doc).to.has.ownProperty('hash');
                    done();
				});
			});
		});
	});
});
