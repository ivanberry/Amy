var express = require('express');
var router = express.Router();

var UserModel = require('../model/User');
const User = require('../ultis/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
	let response = {
		message: 'Success!'
	};
	UserModel.find({}, null, { lean: true }, (err, docs) => {
		if (err) {
			next(err);
		}

		if (docs.length === 0) {
			response.data = [];
			response.statusCode = 200;
			response.message = 'No Users Exits!';
			res.json(response);
		} else {
			response.statusCode = 200;
			response.data = docs;
			res.json(response);
		}
	});
});

router.post('/', function(req, res, next) {
	let name = req.body.name;
	let password = req.body.password;

	let newUser = new User({ name, password });
	newUser.createUser(err => {
		let response = {
			statusCode: 200,
			message: 'Success!'
		};

		if (err) next(err);
		res.json(response);
	});
});

module.exports = router;
