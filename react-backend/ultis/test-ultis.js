'use strict';

const config = require('../config/config');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

process.env.NODE_ENV = 'test';

beforeEach(done => {
	function clearDB() {
		//remove all connectioned collections
		for (let collection in mongoose.connection.collections) {
			mongoose.connection.collections[collection].remove();
		}
		return done();
	}

	if (mongoose.connection.readyState === 0) {
		mongoose.connect(config.db.test, err => {
			if (err) throw new Error(err);
			return clearDB();
		});
	} else {
		return clearDB();
	}
});

afterEach(done => {
	//drop database and close connection
	mongoose.connection.dropDatabase(function() {
		mongoose.connection.close(done);
	});
});

after(function(done) {
	mongoose.models = {};
	mongoose.modelSchemas = {};
	mongoose.connection.close();
	done();
});
