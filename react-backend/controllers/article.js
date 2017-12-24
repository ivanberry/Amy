/**
 * Create new post
 */
const Article = require('../ultis/article');
const ArticleModel = require('../model/Article');
const UserModel = require('../model/User');

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

function getUserArticles(id, page = 1, res, next) {
	let response = {
		statusCode: 200,
		message: 'Success!',
		data: [],
		total: 0
	};

	ArticleModel.find({ authorId: id })
		.then(docs => {
			response.data = docs;
			res.json(response);
		})
		.catch(err => {
			next(err);
		});
}

exports.getArticles = (req, res, next) => {
	let authorId = req.session.userId;
	let page = req.params.page;

	if (authorId) {
		getUserArticles(authorId, page, res, next);
	} else {
		getAllArticles(page, res, next);
	}
};

/**
 * once post new articles, join the article id to the post user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.postNewArticle = (req, res, next) => {
	let { title, body } = req.body;
	let author = req.session.user;
	let _id = req.session.userId;
	let response = {
		statusCode: 200,
		message: 'Success!'
	};

	let newArticle = new Article({
		title,
		body,
		authorId: _id
	});

	//push new article _id to user document articles field
	newArticle
		.createPost()
		.then(doc => {
			return UserModel.findOneAndUpdate(
				{ name: author },
				{ $push: { articles: doc.id } },
				{ lean: true }
			);
		})
		.then(() => {
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
