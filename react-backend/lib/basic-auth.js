const bcrypt = require('bcrypt');
const UserModel = require('../model/User');

/**
 * Authorization only
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = function auth(req, res, next) {
	let _auth64base = (req.headers.authorization || '').split(' ')[1] || '';
	const [name, password] = Buffer.from(_auth64base, 'base64').toString().split(':');

	if (!name || !password) {
		res.status(401);
		res.set('WWW-Authenticate', 'Basic realm="Resource Protected"');
		res.json({
			statusCode: 401,
			message: 'User Unauthorized!'
		});
	} else {
		//forward to next
		UserModel.findOne({ name: name }, 'hash', { lean: true }, (err, doc) => {
			if (err) throw new Error(err);
			bcrypt.compare(password, doc.hash, (err, result) => {
				if (err) next(err);
				if (result) {
					res.status(200);
					next();
				} else {
					res.status(401);
					res.set('WWW-Authenticate', 'Basic realm="Resource Protected"');
					res.json({
						statusCode: 401,
						message: 'User Unauthorized!'
					});
				}
			});
		});
	}
};
