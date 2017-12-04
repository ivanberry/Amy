var UserModel = require('../model/User');
const bcrypt = require('bcrypt');

exports.login = function(req, res, next) {
	let { name, password } = req.body;
	UserModel.findOne({ name: name }, 'hash', { lean: true }, (err, doc) => {
		if (err) next(err);
		bcrypt.compare(password, doc.hash, (err, isUser) => {
			if (err) next(err);
			if (isUser) {
				req.session.user = name;
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
	});
};
