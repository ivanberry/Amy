var UserModel = require('../model/User');
const bcrypt = require('bcrypt');

exports.login = function(req, res, next) {
	let { name, password } = req.body;
	UserModel.findOne({ name: name }, 'hash', { lean: true }, (err, doc) => {
		if (err) next(err);
		bcrypt.compare(password, doc.hash, (err, isUser) => {
			if (err) next(err);
			if (isUser) {

				let _toBase64 = Buffer.from('name:name,hash: doc.hash').toString('base64');
				//after success login, what should do?
				res.status(200);
				res.set('WWW-Authenticate', `Basic ${_toBase64}`);
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
