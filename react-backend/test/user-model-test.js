var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

require('sinon-mongoose');

var ultis = require('./utils');
const User = require('../model/User');

describe('Database Tests', () => {
	describe('Add new user', () => {
		it('insert and retrive user data', done => {
			let newUser = new User({
				name: 'tab',
				password: 'tab',
				uuid: 0
			});

			newUser.save(err => {
				if (err) throw new Error(err);
				User.find({ name: 'tab' })
					.then(docs => {
                        console.log(docs);
						expect(docs[0].uuid, 'user[uuid]').to.equal(0);
					})
					.catch(e => console.log(e));
			});
		});
	});
});
