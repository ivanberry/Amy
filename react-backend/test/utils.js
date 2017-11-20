'use strict';

const config = require('../config/config');
const mongoose = require('mongoose');

process.env.NODE_ENV = 'test';

beforeEach(done => {
	function clearDB() {
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
	mongoose.disconnect();
	return done();
});
