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
	password: 'tab',
	uuid: '0'
};

describe('Database Tests', () => {
	describe('Create user', () => {
		it('create a new user', done => {
			let newUser = new User(o);
			newUser.createUser(err => {
				if (err) throw new Error(err);
				UserModel.findOne({ name: 'tab' })
					.then(doc => {
                        console.log(doc)
						expect(doc).to.be.a('object');
						done();
					})
					.catch(e => done(e));
			});
		});

		// it('match user correctly', done => {
		// 	let newUser = new User(o);
		// 	newUser.save(err => {
		// 		if (err) throw new Error(err);
		// 		UserModel.findOne({ name: 'tab' })
		// 			.then(doc => {
		// 				let pass = doc.password,
		// 					hash = doc.hash;
		// 				bcrypt.compare(pass, hash).then(res => {
		// 					expect(res).to.true;
		// 					done();
		// 				});
		// 			})
		// 			.catch(e => {
		// 				done(e);
		// 			});
		// 	});
		// });
	});
});
