var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	res.json([
		{
			id: 1,
			username: 'tab'
		},
		{
			id: 2,
			username: 'shirting'
		},
		{
			id: 3,
			username: 'amy'
		}
	]);
});

module.exports = router;
