const UserModel = require('../model/User');

/**
 * Authorization only
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = function auth(req, res, next) {
	let _auth64base = (req.headers.authorization || '').split(' ') || '';
	const [name, hash] = new Buffer(_auth64base, 'base64').toString().split(':');

	if (!name || !hash) {
		res.status(200);
		res.set('WWW-Authenticate', 'Basic realm="Resource Protected"');
		res.json({
			statusCode: 401,
			message: 'User Unauthorized!'
		});
	} else {
		//forward to next
		UserModel.findOne({ name: name }, 'hash', { lean: true }, (err, doc) => {
			if (err) throw new Error(err);
			if (hash !== doc.hash) {
				res.status(200);
				res.set('WWW-Authenticate', 'Basic realm="Resource Protected"');
				res.json({
					statusCode: 401,
					message: 'User Unauthorized!'
				});
			} else {
				res.status(200);
				next();
			}
		});
	}
};
