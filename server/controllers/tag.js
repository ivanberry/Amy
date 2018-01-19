const TagModel = require('../model/Tag');
const Tag = require('../ultis/tag');

exports.addNewTag = function(req, res, next) {
	let { name } = req.body;
	let response = {
		statusCode: 200,
		message: 'Success!'
	};

	if (name) {
		TagModel.findOne({ name })
			.then(doc => {
				if (doc) {
					response.message = 'Tag has been exsited!';
					res.json(response);
					next();
				} else {
					let newTag = new Tag({ name });
					newTag.createNewTag().then(doc => {
						if (doc) {
							res.json(response);
							next();
						}
					});
				}
			})
			.catch(err => {
				next(err);
			});
	} else {
		response = {
			statusCode: 404,
			message: 'tag name needed'
		};
		res.json(response);
		next();
	}
};

exports.deleteTag = function(req, res, next) {
	let { name } = req.body;
	let response = {
		statusCode: 200,
		message: 'Success!'
	};

	if (name) {
		TagModel.findOne({ name })
			.then(doc => {
				if (doc) {
					res.json(response);
				} else {
					response.statusCode = 502;
                    response.message = 'Server Error!';
                    res.status(502);
                    res.json(response);
                    next();
				}
				next();
			})
			.catch(err => {
				next(err);
			});
	} else {
		response = {
			statusCode: 404,
			message: 'tag name needed'
        };
        res.status(404);
        res.json(response);
		next();
	}
};
