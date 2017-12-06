/**
 * Create new post
 */
const Article = require('../ultis/article');
const ArticleModel = require('../model/Article');

exports.getAllArticles = (req, res, next) => {
	let response = {
		statusCode: 200,
		message: 'Success!',
		data: [],
		total: 0
	};
	ArticleModel.find({}, { lean: true })
		.then(doc => {
			response.total = doc.length;
			response.data = doc;
			res.json(response);
		})
		.catch(err => {
			next(err);
		});
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
	let response = {
		statusCode: 200,
		message: 'Success!'
	};
	ArticleModel.findByIdAndUpdate({_id: id}, { title: title, body: body }, { new: true })
        .then(doc => {
            response.id = doc.id;
            res.json(response);
        })
        .catch(err => {
            next(err);
        });
};
