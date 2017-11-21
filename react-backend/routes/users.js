var express = require('express');
var router = express.Router();
const db = require('../config/config').db;

var UserModel = require('../model/User');

/* GET users listing. */
router.get('/', function(req, res) {
	let users = [];
	let response = {
		statusCode: 200,
		message: 'Success!',
		data: users
	};
	res.statusCode = 200;
	res.json(response);
});

router.post('/', function(req, res, next) {
	res.end('wowo');
});

module.exports = router;
