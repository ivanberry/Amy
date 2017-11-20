var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

require('sinon-mongoose');

var ultis = require('./utils');
const User = require('../model/User');

describe('Database Tests', () => {
	describe('Add new user', () => {
		it('should add a new user', done => {
		    let newUser = new User({
		        name: 'tab',
		        password: 'tab',
		        uuid: 0
		    });

		    newUser.save(done);
		});

		it('retrive insert data', done => {
		    User.find({ name: 'tab' }, (err, doc) => {
		        done();
		    });
		});

		it('insert and retrive user data', done => {
			let newUser = new User({
				name: 'tab',
				password: 'tab',
				uuid: 0
			});

			newUser.save(err => {
				if (err) throw new Error(err);
				User.find({ name: 'tab' }, (err, docs) => {
					if (err) throw new Error(err);
					console.log(docs);
					expect(docs[0].uuid, 'doc[uuid]').to.equal('0');
					done();
				});
			});
		});
	});
});
