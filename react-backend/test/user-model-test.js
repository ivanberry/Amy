var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

const User = require('../model/User');
const config = require('../config/config');
const dbUrl = config.db.test;

describe('Database Tests', () => {
	before(done => {
		mongoose.connect(config.db.test, { useMongoClient: true });
		let db = mongoose.connection;
		db.on('error', console.log.bind(console, 'connect error'));
		db.once('open', () => {
			console.log('database connected!');
			done();
		});
    });
    
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
            newUser.save();

            User.find({ name: 'tab' }, (err, docs) => {
                if (err) throw new Error(err);
                expect(docs[0].uuid, 'doc[uuid]').to.equal('0');
                done();
            });
        });
    })

	afterEach(function(done) {
		mongoose.connection.dropDatabase(function() {
			mongoose.connection.close(done);
		});
	});
});
