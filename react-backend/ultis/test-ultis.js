'use strict';

process.env.NODE_ENV = 'test';
const config = require('../config/_config');
const mongoose = require('mongoose');
const server = require('../app');

mongoose.Promise = Promise;

after(function(done) {
	mongoose.models = {};
	mongoose.modelSchemas = {};
	mongoose.connection.close();
	done();
});
