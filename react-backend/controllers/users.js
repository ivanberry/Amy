var UserModel = require('../model/User');
const User = require('../ultis/user');

/**
 * 注册或更新用户
 * @param {*} obj 
 */
function createOrUpdate(req, res, next) {
	let { name, password } = req.body;
	let _name = req.params.name;

	let response = {
		statusCode: 200,
		message: 'Success!'
	};

	if (_name) {
		UserModel.findOne({ name: _name }, 'password')
			.then(doc => {
				if (doc) return Object.assign(doc, { password: password });
			})
			.then(doc => {
				return doc.save();
			})
			.then(updatedDoc => {
				response.message = 'Password updates success!';
				updatedDoc = updatedDoc.toObject();
				response = Object.assign(response, { password: updatedDoc.password });
				res.json(JSON.stringify(response));
			})
			.catch(err => next(err));
	} else {
		let newUser = new User({ name, password });
		newUser.createUser(err => {
			if (err) {
				if (err.code === 11000) {
					response.statusCode = 401;
					response.message = 'Name has been used';
					res.json(response);
				} else {
					next(err);
				}
			} else {
				response.statusCode = 201;
				res.json(response);
			}
		});
	}
}

/* GET users listing. */
exports.get = function(req, res, next) {
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
};

exports.post = function(req, res, next) {
	let _o = {
		name: req.body.name,
		password: req.body.password,
		param: req.params.name
	};
	createOrUpdate(req, res, next, _o);
};
