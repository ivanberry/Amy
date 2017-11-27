const bcrypt = require('bcrypt');
const UserModel = require('../model/User');

module.exports = function auth(req, res, next) {
	/**
	 * 0. if have session id, regard as authorized
	 * 1. retrive data from Authorization
	 */
	let _auth64base = (req.headers.authorization || '').split(' ') || '';
	const [login, password] = new Buffer(_auth64base, 'base64').toString().split(':');

	if (!login || !password) {
        res.status(401);
        res.set('WWW-Authenticate', 'Basic realm="nope"');
		res.json({
			statusCode: 401,
			message: 'User Unauthorized!'
		});
	} else {
		//forward to next
		next();
	}
};
