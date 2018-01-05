var UserModel = require('../model/User');
const bcrypt = require('bcrypt');

exports.login = function(req, res, next) {
	let { name, password } = req.body;
	if (!name || !password) {
		res.status(401);
		res.json({
			statusCode: 401,
			message: 'Params Error'
		});
	} else {
		UserModel.findOne({ name: name }, 'hash', { lean: true }, (err, doc) => {
			if (err) next(err);
			if (!doc) {
				res.status(401);
				res.json({
					statusCode: 401,
					message: 'User Not Exists!'
				});
			} else {
				let _id = doc._id;
				bcrypt.compare(password, doc.hash, (err, isUser) => {
					if (err) next(err);
					if (isUser) {
						req.session.user = name;
						req.session.userId = _id;
						res.status(200);
						res.json({
							statusCode: 200,
							message: 'Login Successed!'
						});
						next();
					} else {
						res.status(200);
						res.json({
							statusCode: 200,
							message: 'You need login!'
						});
					}
				});
			}
		});
	}
};
