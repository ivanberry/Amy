/**
 * Create new post
 */
const Article = require('../ultis/article');
const ArticleModel = require('../model/Article');

function getAllArticles(page = 1, res, next) {
	let response = {
		statusCode: 200,
		message: 'Success!',
		data: [],
		total: 0
	};
	ArticleModel.find()
		.lean()
		.then(doc => {
			response.total = doc.length;
			response.data = doc;
			res.json(response);
		})
		.catch(err => {
			next(err);
		});
}

function getUserArticles(user, page = 1, res, next) {
	let response = {
		statusCode: 200,
		message: 'Success!',
		data: [],
		total: 0
	};
	ArticleModel.find({
		name: user 
	})
		.lean()
		.then(doc => {
			response.data = doc;
			response.total = doc.length;
			res.json(response);
		})
		.catch(err => {
			next(err);
		});
}

exports.getArticles = (req, res, next) => {
	let user = req.params.username || req.session.user;
	let page = req.params.page;

	if(user) {
		getUserArticles(user, page, res, next);
	} else {
		getAllArticles(page, res, next);
	}
};

exports.postNewArticle = (req, res, next) => {
	let { title, body, author } = req.body;
	let newArticle = new Article({
		title,
		body,
		author
	});

	let response = {
		statusCode: 200,
		message: 'Success!'
	};

	newArticle
		.createPost()
		.then(doc => {
			response.id = doc.id;
			res.json(response);
			next();
		})
		.catch(err => {
			next(err);
		});
};

exports.updateArticle = (req, res, next) => {
	let { title, body } = req.body;
	let { id } = req.params;
	let update = {
		title,
		body
	};
	let response = {
		statusCode: 200,
		message: 'Success!'
	};
	ArticleModel.findByIdAndUpdate({ _id: id }, update, { new: true })
		.then(doc => {
			response.id = doc.id;
			res.json(response);
		})
		.catch(err => {
			next(err);
		});
};

exports.deleteArticle = (req, res, next) => {
	let { id } = req.params;
	let response = {
		statusCode: 200,
		message: 'Success!'
	};

	ArticleModel.findByIdAndRemove(id)
		.then(doc => {
			if (!doc) {
				response.message = 'Not Found The Article!';
				res.json(response);
				next();
			}
			res.json(response);
			next();
		})
		.catch(err => {
			next(err);
		});
};
