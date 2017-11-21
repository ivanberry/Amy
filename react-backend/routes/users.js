var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	let response = {
		statusCode: 200,
		message: 'There are all users!',
		data: []
	};
	res.statusCode = 200;
	res.json(response);
});

router.post('/', function (req, res, next) {
	res.end('wowo');
});

module.exports = router;
