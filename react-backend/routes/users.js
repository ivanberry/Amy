var express = require('express');
var router = express.Router();

var UserModel = require('../model/User');

/* GET users listing. */
router.get('/', function(req, res) {
	let response = {
		statusCode: 200,
		message: 'Success!'
	};
	UserModel.find({}, null, { lean: true }, (err, docs) => {
		response.data = docs;
		res.statusCode = 200;
		res.json(response);
	});
});

router.post('/', function(req, res, next) {
	res.end('wowo');
});

module.exports = router;
